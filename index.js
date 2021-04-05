const compiler = require('vue-template-compiler')
const fs = require('fs')

console.log(compiler.parseComponent(fs.readFileSync('component.vue', 'utf8')))