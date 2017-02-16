const htmlparser = require('htmlparser2');
const cheerio = require('cheerio');

function getLineOffset(needle, haystack) {
  const targetPosition = haystack.indexOf(needle);
  const untilTargetPosition = haystack.substring(0, targetPosition);
  return untilTargetPosition.split(/\r?\n/).length - 1;
}

module.exports = function parse(fileData) {
  const templates = [];

  const handler = new htmlparser.DefaultHandler((error, dom) => {
    if (error) {
      return console.log(error);
    }

    const $ = cheerio.load(dom);

    const mapItem = item => ({
      content: item,
      lineOffset: getLineOffset(item, fileData),
    });

    const blocks = [
      $('style[lang="scss"]:not([scoped])').text(),
      $('style[lang="scss"][scoped]').text(),
    ];

    blocks.forEach((block) => {
      templates.push(mapItem(block));
    });

    return templates;
  });

  const parser = new htmlparser.Parser(handler);

  parser.parseComplete(fileData);

  return templates;
};
