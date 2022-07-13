var chalk = require('chalk')
var kduCompiler = require('kdu-template-compiler')
var transpile = require('kdu-template-es2015-compiler')
var compilePug = require('./compilers/pug-compiler')
var compileJade = require('./compilers/jade-compiler')
const throwError = require('./throw-error')

function getTemplateContent (templatePart) {
  if (templatePart.lang === 'pug') {
    return compilePug(templatePart.content)
  }
  if (templatePart.lang === 'jade') {
    return compileJade(templatePart.content)
  }
  return templatePart.content
}

module.exports = function compileTemplate (templatePart) {
  var templateContent = getTemplateContent(templatePart)

  var compiled = kduCompiler.compile(templateContent)
  if (compiled.errors.length) {
    compiled.errors.forEach(function (msg) {
      console.error('\n' + chalk.red(msg) + '\n')
    })
    throwError('Kdu template compilation failed')
  } else {
    return {
      render: toFunction(compiled.render),
      staticRenderFns: '[' + compiled.staticRenderFns.map(toFunction).join(',') + ']'
    }
  }
}

function toFunction (code) {
  return transpile('function render () {' + code + '}')
}
