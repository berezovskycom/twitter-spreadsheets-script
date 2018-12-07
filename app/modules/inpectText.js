function inspectText(contents, link, linkObj = []) {
  const indexOfString = contents.indexOf(link);

  if (indexOfString != -1) {
    const string = contents.slice(indexOfString, indexOfString + 35);
    const stringNoQuote = string.slice(0, string.indexOf('"'));

    linkObj.push([stringNoQuote]);
  } else {
    linkObj.push(['null']);
  }

  return linkObj;
}

module.exports = inspectText;
