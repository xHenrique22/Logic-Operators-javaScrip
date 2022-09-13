const prompt = require('prompt-sync')()

const secondsStr = prompt('Digite a duração de segundos do evento na fábrica: ')
const seconds = Number(secondsStr)

const hour = seconds / 3600

const minutos = (seconds % 3600) / 60

const secondsRest = (seconds % 3600) % 60

console.log(`A quantidade de horas do evento na fábrica é de ${hour} horas.`)
console.log(`A quantidade de minutos do evento na fábrica é de ${minutos} minutos.`)
console.log(`A quantidade de segundos do evento na fábrica é de ${secondsRest} segundos.`)