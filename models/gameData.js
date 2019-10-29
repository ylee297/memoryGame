let db = require('../util/database');
let sql = require('mssql');

// Add a single individual to the database
async function addScore(userInfo) { 
    let sql = `INSERT INTO score (name,score) VALUES ('${userInfo.name}',${userInfo.score})`;
    await db.connect();
    try {
    	const request = db.request(); // or: new sql.Request(pool1)
    	const result = request.query(sql)
        result.then((data) => console.log(data))
        return result;
	} catch (err) {
        console.error('SQL error', err);
	}
}

// Gets all the individuals in the database
async function getAllScores() {
    let returnValue;
    await db.connect().then(async function () {
        let request = new sql.Request(db);
        await request.query("select * from score").then(async function (recordSet) {
            returnValue = recordSet
            db.close();
        }).catch(function (err) {
            console.log(err);
            db.close();
        });
    }).catch(function (err) {
        console.log(err);
    });
    return returnValue.recordset;
}


module.exports = {
    add : addScore,
    getall : getAllScores
}