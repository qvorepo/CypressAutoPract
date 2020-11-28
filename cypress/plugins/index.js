/// <reference types="cypress" />
//index.js from the plugins folder


const fs = require('fs');
const xlsx = require("node-xlsx").default;
const sqlite3 = require('sqlite3').verbose();
const cucumber=require ('cypress-cucumber-preprocessor').default;
const moment = require('moment');
const excelWrite = require('excel4node');
const excelRead = require('read-excel-file/node');


module.exports = (on, _config) => {
	on('task', {
		 print: log,
		 readDir: lst,
		 readFile: fileContent,
		 queryDb: queryTestDb,
		 writeToExcel: writeExcel,
		 copyDir: copyDirectory,
		 readExcel:readExcel,
		 downloadFile: downloadFile,
		 parseExcel: parseExcel,
		 //wait: timeout,
	});
	on('file:preprocessor', cucumber ());
};


/** Console log */
const log = (message) => {
    console.log(message);
    return 'OK';
};

// const timeout = (timeout) => {
//     return wait(timeout);
// };

/** Read directories */
const lst = (path) => {
    return fs.readdirSync(path);
};

/** Read files */
const fileContent = (path) => {
	return fs.readFileSync(path, 'utf8');
};


/**
 * SQLite Database Connection
 */
const path='C:/Users/Mamga/TestDB/chinook.db'
function queryTestDb(sql) {
	let db = new sqlite3.Database(path);
	return new Promise((resolve, reject) => {
		db.all(sql, [], (err, rows) => {
		if(err) 
			reject(err); 

		else  {
		  db.close();
		  console.log(rows)
		  return resolve(rows);
		}//End else
		
	  });//End db.run

	});
}

/**
 * Write an Excel file XLSX
 * Reference:  https://www.npmjs.com/package/excel4node
 * @param {*} path 
 */
function writeExcel(errorCounts)
{
	// Require library


// Create a new instance of a Workbook class
var workbook = new excelWrite.Workbook();

// Add Worksheets to the workbook
var worksheet = workbook.addWorksheet('Sheet 1');
var worksheet2 = workbook.addWorksheet('Sheet 2');

// Create a reusable style
var style = workbook.createStyle({
  font: {
    color: '#000000',
    size: 12
  },
  border: {
    top: {style: 'thin'},
    bottom: {style: 'thin'},
    left: {style: 'thin'},
    right: {style: 'thin'}
  }//,
	//numberFormat: '$#,##0.00; ($#,##0.00); -'
});

var style1 = workbook.createStyle({
  font: {
    color: '#000000',
    size: 12
  },
  border: {
    top: {style: 'thin'},
    bottom: {style: 'thin'},
    left: {style: 'thin'},
    right: {style: 'thin'}
  },
	numberFormat: '#,##0;'
});

// Create a reusable style
var stylebold = workbook.createStyle({
  fill: {
    type: 'pattern',
    patternType: 'solid',
    bgColor: '#F87217',
    fgColor: '#F87217',
  },
  border: {
    top: {style: 'thick'},
    bottom: {style: 'thick'},
    left: {style: 'thick'},
    right: {style: 'thick'}
  },
	font: {
	  color: '#FFFFFF',
	  size: 14,
	  bold: true
	
	}//,
	//numberFormat: '$#,##0.00; ($#,##0.00); -'
  });

 // var readerRow  = ['Error Code', 'Count Prior To Fix', 'Count After Fix in v3.2.6'];
 // var firstRow  = ['Test txt', 1920, 799];
 var headrowThirdColumn='Count After Fix';

// Set value of cell A1 to 100 as a number type styled with paramaters of style
worksheet.cell(1,1).string(errorCounts[0][0]).style(stylebold);

// Set value of cell B1 to 300 as a number type styled with paramaters of style
worksheet.cell(1,2).string(errorCounts[0][1]).style(stylebold);

// Set value of cell A1 to 100 as a number type styled with paramaters of style
worksheet.cell(1,3).string(errorCounts[0][2]).style(stylebold);

errorCounts.forEach((errorCount, index)=>{
	var sheetIndex=index+1;
	if(index>0)
	{
			//Rows and columns
	worksheet.cell(sheetIndex,1).string(errorCount[0]).style(style);
	worksheet.cell(sheetIndex,2).number(errorCount[1]).style(style1);
	worksheet.cell(sheetIndex,3).number(errorCount[2]).style(style1);

	}
});

const currentDateTime= moment().format('YYYYMMDD_HHmmSS');
const excelFile='./cypress/fixtures/ErrorCounts_'+currentDateTime+'.xlsx';
workbook.write(excelFile, 'utf8');

return 'OK'
}



/**
 * Copy a directory
 */
var copydir = require('copy-dir');
function copyDirectory()
{
	const srcDir='C:/SPC/logs';
   const targetDir='C:/Logs_Copy/logs';
	copydir.sync(srcDir, targetDir, {
		utimes: true,  // keep add time and modify time
		mode: true,    // keep file mode
		cover: true    // cover file when exists, default is true
	  });
	  return 'OK'
}

/**
 * Download Files
 */
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
// module.exports = (on, config) => {
//   on('task', {downloadFile})
// }


// const wit = (timeout) => {
//     return new Promise((res) => {
//         setTimeout(() => {
//             res(null);
//         }, timeout);
//     });
// };

/**
 * Read data from an Excel spreadsheet
 */
function readExcel(fileName)
{
	//const file='./cypress/fixtures/ErrorCodes.xlsx';
	
	return excelRead(fileName);

}

/**
 * Parse Excel file
 */
function parseExcel(filePath)
{
	return new Promise((resolve, reject) => {
		try {
			const jsonData = xlsx.parse(fs.readFileSync(filePath));
			resolve(jsonData);
		  } catch (e) {
			reject(e);
		  }
	});

} 

