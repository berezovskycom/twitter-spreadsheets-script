const request = require('request');
const inspectText = require('./inpectText.js');

const reqPage = (url, linkToFind, objToPushIfFound) => {
  request(url.toString(), function (error, response, body) {
    // console.log('error:', error);
    // console.log('statusCode:', response && response.statusCode);
    inspectText(body, linkToFind, objToPushIfFound);
  });
}

module.exports = reqPage;
