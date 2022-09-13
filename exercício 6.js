const prompt = require('prompt-sync')()

const xString = prompt('Digite o ponto X:')
const x1 = Number(xString)

const yString = prompt('Digite o ponto Y:')
const y1 = Number(yString)

const xString1 = prompt('Digite o ponto X1:')
const x2 = Number(xString1)

const yString1 = prompt('Digite o ponto Y1:')
const y2 = Number(yString1)

const d = Math.floor(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2))

console.log(`A distância entre os pontos P1(${x1},${y1}) e P2(${y1},${y2}) é ${d}`)