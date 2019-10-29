

let sql = require('mssql');
let config = {
    server: 'memorygame.database.windows.net',
    database: 'memorygame',
    user: 'younhee',
    password: '4wnr8dmadbs!',
    encrypt : true
};
const conn = new sql.ConnectionPool(config);

module.exports = conn;



// function listProducts() {
//     var conn = new sql.ConnectionPool(config);
//     conn.connect().then(function () {
//         var request = new sql.Request(conn);
//         request.query("select * from products").then(function (recordSet) {
//             console.log(recordSet);
//             conn.close();
//         }).catch(function (err) {
//             console.log(err);
//             conn.close();
//         });
//     }).catch(function (err) {
//         console.log(err);
//     });
// }