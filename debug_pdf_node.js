const pdf = require('pdf-parse/node');
console.log('Type of pdf node:', typeof pdf);
console.log('Keys of pdf node:', Object.keys(pdf));
if (pdf.pdfParse) console.log('Found pdfParse function!');
