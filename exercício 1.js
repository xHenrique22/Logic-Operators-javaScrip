
// Requerendo o prompt
const prompt = require ('prompt-sync')() 
// Constantes Number + Leitura de dados
const anosString = prompt('Digite quantos anos você tem: ')
const anos = Number(anosString)

const mesesString = prompt('Digite quantos meses você tem: ')
const meses = Number(mesesString)

const diasString = prompt('Digite quantos dias você tem: ')
const dias = Number(diasString)

// Processamentos
const totalDias = (anos*365) + (meses*30) + dias

// Saída de dados
console.log(`\n------------------------------------------------------------`)
console.log(`\nVocê viveu ${totalDias} dias.`)