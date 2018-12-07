const { google } = require('googleapis');
const Params = require('../../index');
const a = require('./auth-2');
const reqPage = require('../requestPage');
const update = require('./updateList');

const { req } = Params;

a.loadClientSecrectsWith(getMediumList);

function getMediumList(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  const {
    spreadsheetId, 
    rangeGet, 
    mediumLinksObj,
    twitterLinksObj,
    maxLengthOfRows,
    timer 
  } = req;

  sheets.spreadsheets.values.get({
    spreadsheetId,
    range: rangeGet,
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
      behavior(
        rows,
        mediumLinksObj,
        twitterLinksObj,
        maxLengthOfRows,
        timer
      );
    } else {
      console.log('No data found.');
    }

  });
}

function behavior(
  rowsObj, 
  objToPush,
  objToPushParsedLinks,
  maxLength = 100, 
  timer = 3000
) {
  rowsObj.map((row) => {
    objToPush.push(row);
    console.log(objToPush.length, maxLength);
    if (objToPush.length == maxLength) {
      let i = 0;

      const t = setInterval(() => {
        reqPage(objToPush[i], 'https://twitter.com/', objToPushParsedLinks);
        i += 1;
        console.log('scanned', '\x1b[32m', i, '\x1b[0m', 'pages')
        if (i == maxLength) {
          clearInterval(t);
          // update.obj(objToPushParsedLinks);
          a.loadClientSecrectsWith(update.spreadsheet);
        }
      }, timer);

    }

  });
}

module.exports.linksObj = Params.req.twitterLinksObj;
