const hash = {
  dev: 'your-dev-id-from-g-spreadsheets',
  prod: 'your-prod-id-from-g-spreadsheets'
};

const linksObj = [];

let rowNumberFrom = '3910';
    numberToPerform = 1;

const req = {
  spreadsheetId: hash.prod,
  rangeGet: `B${rowNumberFrom}:B`,
  rangePost: `D${rowNumberFrom}:D`,
  rangeTwitter: 'D2:D',
  rangeStatus: 'A3910:A',
  mediumLinksObj: [],
  twitterLinksObj: [],
  allTwitterLinks: [],
  maxLengthOfRows: numberToPerform,
  numOfIntervalToStop: numberToPerform,
  timer: 3000,
  valueInputOption: 'RAW'
}

module.exports.req = req;
