/**
 * https://www.sqlitetutorial.net/sqlite-nodejs/insert/
 * 
 */
const sqlite3 = require('sqlite3').verbose();

  let db = new sqlite3.Database('C:/Users/Mamga/TestDB/chinook.db');
  let sql='INSERT INTO Persons values ("Yen", "Vo", 50)';
  //let sql='select * from PERSONS';

  // insert one row into the langs table
  db.run(sql, function(err) {
    if (err) {
      return console.log(err.message);
    }
    // get the last insert id
    console.log(`A row has been inserted with rowid ${this.lastID}`);//insert
    console.log(`Number of rows affected ${this.changes}`);//insert

  });

  // close the database connection
  db.close();