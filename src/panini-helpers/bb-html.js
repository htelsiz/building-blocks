var fs = require('fs')
module.exports = function(page) {
  var baseName = page.split('.')[0]
  return fs.readSync('building-blocks/active/' + baseName + '.html').text;
}

//
//{{bb-html page}}