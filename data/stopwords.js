const fs = require('fs')
const path = require('path')

const base = path.join(__dirname, 'stopwords')
var result = {}
fs.readdirSync(base)
  .filter(file => file.endsWith('.txt'))
  .forEach(file => {
    const lang = file.substr('stopwords-'.length, 2)
    const stopwords = fs.readFileSync(path.join(base, file), 'utf8')
      .toString()
      .split(/[\r\n]+/)
      .filter(s => s.length > 0)
    result[lang] = stopwords
  })

console.log(JSON.stringify(result))
