const fs = require('fs')
const docs = require('../dist/date_fns_docs.json')

function camelCaseToSnakeCase (string) {
  return string
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/([A-Z])([A-Z])([a-z])/g, '$1_$2$3').toLowerCase()
}

function buildFpFn (doc) {
  const {name, params} = doc.content
  const arity = params.filter((param) => !param.name.includes('.')).length

  const fpFnLines = ['// This file is generated automatically. Please don\'t change it.']
    .concat('')
    .concat(`var fn = require('../../${camelCaseToSnakeCase(name)}/index.js')`)
    .concat(`var convertToFp = require('../_lib/convertToFp/index.js')`)
    .concat('')
    .concat(`var ${name} = convertToFp(fn, ${arity})`)
    .concat('')
    .concat(`module.exports = ${name}`)
    .concat('')
    .join('\n')

  const fpFnWithOptionsLines = ['// This file is generated automatically. Please don\'t change it.']
    .concat('')
    .concat(`var fn = require('../../${camelCaseToSnakeCase(name)}/index.js')`)
    .concat(`var convertToFpWithOptions = require('../_lib/convertToFpWithOptions/index.js')`)
    .concat('')
    .concat(`var ${name}WithOptions = convertToFpWithOptions(fn, ${arity})`)
    .concat('')
    .concat(`module.exports = ${name}WithOptions`)
    .concat('')
    .join('\n')

  fs.mkdirSync(`./tmp/npm/fp/${name}`)
  fs.writeFileSync(`./tmp/npm/fp/${name}/index.js`, fpFnLines)

  fs.mkdirSync(`./tmp/npm/fp/${name}WithOptions`)
  fs.writeFileSync(`./tmp/npm/fp/${name}WithOptions/index.js`, fpFnWithOptionsLines)
}

function buildFp () {
  const fns = Object.keys(docs)
    .filter(key => key.endsWith(' Helpers'))
    .map(category => docs[category])
    .reduce((previousValue, newValue) => [...previousValue, ...newValue], [])

  fns.map(buildFpFn)
}

module.exports = buildFp()
