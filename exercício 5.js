const prompt = require('prompt-sync')()

const nota1Str = prompt('Digite a nota 1: ')
const nota1 = Number(nota1Str)

const nota2Str = prompt('Digite a nota 2: ')
const nota2 = Number(nota2Str)

const nota3Str = prompt('Digite a nota 3: ')
const nota3 = Number(nota3Str)

const mediaFinal = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10

console.log(`A média das notas foi: ${mediaFinal}`)
