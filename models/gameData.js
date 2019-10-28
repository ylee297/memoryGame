let db = require('../util/database');

// Add a single individual to the database
async function addScore(userInfo) { 
    let sql = "INSERT INTO score (name, score) VALUES (\""+userInfo.name+"\","+userInfo.score+")";
    console.log(sql);
    await db.execute(sql)
    .catch((error) => console.log(error));
}

// Gets all the individuals in the database
async function getAllPeople() {
    let returnValue;
    await db.execute('Select * from score')
    .then((data) => {returnValue = data})
    .catch((error) => console.log(error));
    return returnValue;
}


module.exports = {
    add : addScore,
    getall : getAllPeople
}