const prompt = require('prompt-sync')() 

const custoString = prompt('Digite o custo de fábrica: ')
const custo = Number(custoString)

const pDistribuidor = 0.28

const imposto = 0.45

custoFinal = (custo * pDistribuidor) + (custo * imposto) + custo

console.log(`O custo total do carro é: ${custoFinal}`)