const htmlparser = require('htmlparser2')
const cheerio = require('cheerio')

function getLineOffset (needle, haystack) {
  const targetPosition = haystack.indexOf(needle)
  const untilTargetPosition = haystack.substring(0, targetPosition)
  return untilTargetPosition.split(/\r?\n/).length - 1
}

module.exports = function (fileData) {
  let templates = []

  const handler = new htmlparser.DefaultHandler((error, dom) => {
    if (error) {
      return console.log(error)
    }

    const $ = cheerio.load(dom)
    const template = $('style[lang="scss"]').text()

    if (template.length <= 0) {
      return
    }

    templates.push({
      content: template,
      lineOffset: getLineOffset(template, fileData)
    })
  })

  const parser = new htmlparser.Parser(handler)

  parser.parseComplete(fileData)

  return templates
}
