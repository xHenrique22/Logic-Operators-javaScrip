const prompt = require('prompt-sync')()

const daysStr = prompt('Quantos dias você viveu: ')
const days = Number(daysStr)

const years = days / 365

const mouths = (days % 365) / 30

const daysT = (days % 365) % 30

console.log(`A quantidade de anos que você viveu foi de ${years} anos.`)
console.log(`A quantidade de meses que você viveu foi de ${mouths} mês(es).`)
console.log(`A quantidade de dias vividos foi de ${daysT} dias.`)
