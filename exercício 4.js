const prompt = require('prompt-sync')()

const aStr = prompt('Digite o valor A:')
const a = Number(aStr)

const bStr= prompt('Digite o valor B:')
const b = Number(bStr)

const cStr = prompt('Digite o valor C:')
const c = Number(cStr)

const r = Math.pow(a+b,2)

const s = Math.pow(b+c, 2)

const d = r+s / 2

console.log(`O resultado da expressão é de: ${d}`)