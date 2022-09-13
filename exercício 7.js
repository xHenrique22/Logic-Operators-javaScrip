const prompt = require('prompt-sync')() 

const aString = prompt('Digite o coeficiente A: ')
const a = Number(aString)

const bString = prompt('Digite o coeficiente B: ')
const b = Number(bString)

const cString = prompt('Digite o coeficiente C: ')
const c = Number(cString)

const dString = prompt('Digite o coeficiente D: ')
const d = Number(dString)

const eString = prompt('Digite o coeficiente E: ')
const e = Number(eString)

const fString = prompt('Digite o coeficiente F: ')
const f = Number(fString)

const x = (c * e - b * f) / (a * e - b * d)
const y = (a * f - c * d) / (a * e - b * d)

console.log(`O valor de X é: (${x}), o valor de Y é: (${y})`)



