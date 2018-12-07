const { google } = require('googleapis');
const Params = require('../../index');
const hash = require('./hashForDocs');
const fromGet = require('./getList');

const { req } = Params;

function updateSpreadsheet(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  const {
    spreadsheetId,
    rangePost,
    valueInputOption,
    twitterLinksObj
  } = req;

  let values = twitterLinksObj

  const resource = {
    values,
  };

  sheets.spreadsheets.values.update({
    spreadsheetId,
    range: rangePost,
    valueInputOption,
    resource,
  }, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log('\x1b[32m', 'Updated.');
    }
  });
}

module.exports.spreadsheet = updateSpreadsheet;
