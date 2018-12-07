const { google } = require('googleapis');
const Params = require('../../index');
const a = require('./auth-2');
const t = require('../twitter');

const { req } = Params;

a.loadClientSecrectsWith(getTwitterList);

function getTwitterList(auth) {
  const sheets = google.sheets({version: 'v4', auth});
  const {
    spreadsheetId,
    rangeTwitter,
  } = req;

  sheets.spreadsheets.values.get({
    spreadsheetId,
    range: rangeTwitter,
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;

    if (rows.length) {
      behavior(rows);
    } else {
      console.log('No data found.');
    }

  });
}

function behavior(obj) {
  obj.forEach(link => {
    const str = link.toString();
    if (str.indexOf('https://twitter.com/') == 0) {
      const sliced = str.slice(20);
      t.tweetTo(sliced);
    }
  })
}

// module.exports.linksObj = Params.req.twitterLinksObj;
