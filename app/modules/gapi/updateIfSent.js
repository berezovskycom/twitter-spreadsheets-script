const { google } = require('googleapis');
const Params = require('../../index');
const a = require('./auth-2');

const { req } = Params;

a.loadClientSecrectsWith(updateSpreadsheet)

function updateSpreadsheet(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  const {
    spreadsheetId,
    rangeStatus,
    valueInputOption,
    twitterLinksObj,
    maxLengthOfRows
  } = req;

  let values = []

  for (let i = 0; i < maxLengthOfRows; i++) {
    values.push(['sent'])
  } 

  const resource = {
    values,
  };

  sheets.spreadsheets.values.update({
    spreadsheetId,
    range: rangeStatus,
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
