/**
 * https://www.sqlitetutorial.net/sqlite-nodejs/query/
 * 
 */
const sqlite3 = require('sqlite3').verbose();

  let db = new sqlite3.Database('C:/Users/Mamga/TestDB/chinook.db');
  let sql='select * from PERSONS order by Age';
  
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    rows.forEach((row) => {
      console.log(row.FirstName + " "+ row.LastName + ", " + row.Age);
    });
  });
  
  // close the database connection
  db.close();