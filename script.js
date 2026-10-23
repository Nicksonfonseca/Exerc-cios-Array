const equipe = [
  "André Luiz", "Arthur", "Breno", "Carlos Eduardo",
  "Cauã", "Davi", "Davi", "Eduardo",
  "Emerson", "Erick", "Eris", "Ezequiel",
  "Felipe", "Francisco", "Gabrielly", "Guilherme",
  "Gustavo Alexandre", "Gustavo Augusto", "Heloa", "Isabelle",
  "Ivaneide", "Jayme", "Jorge", "João Pedro",
  "João Vitor", "Kaio", "Luis Otávio", "Layson",
  "Lorenzzo", "Lucas", "Lucas Matheus", "Luis Gustavo",
  "Luiz", "Magsdene", "Marco Antônio", "Mateus",
  "Nickson", "Octavio", "Otávio", "Patrick",
  "Pedro Junio", "Rafael", "Victor Hugo", "Victor Hugo",
  "Vinícius", "Willky",
];

// Exercício 1
console.log("Exercício 1:")

const escalaManha = ["Heloa", "Erick", "Vinícius", "Davi", "Luiz"];
console.log(escalaManha[0], escalaManha[4], 'e', escalaManha.length)

// Exercício 2
console.log("Exercício 2:")

const equipeEstoque = ["Ezequiel", "Pedro Junio"];
equipeEstoque.push('Nickson')
const saiu = equipeEstoque.pop()
console.log(`${saiu} saiu e a equipe volta a ser  ${equipeEstoque}`)

// Exercico 3
console.log("Exercício 3:")

const filaCafe = ["Lucas", "Mateus", "Otávio"];
filaCafe.unshift('Isabelle')
const saiuFila = filaCafe.shift()
console.log(`${saiuFila} foi atendida e a fila fica ${filaCafe}`)

// Exercício 4
console.log("Exercício 4:")

const confirmados = [
  "Gustavo Alexandre", "João Vitor", "Heloa", "Victor Hugo",
  "Breno", "Octavio", "Kaio", "Lorenzzo"];
console.log(`Heloa ${confirmados.includes("Heloa")}; Pedro Junio ${confirmados.includes("Pedro Junio")}, e depois ele aparece no fim da lista.`)
confirmados.push("Pedro Junio")

// Exercício 5
console.log("Exercício 5:")

const novatos = ["patrick", "magsdene", "willky"];
const cracha = novatos.map(nome => `CRACHÁ • ${nome.toUpperCase()}`)
console.log(cracha)

// Exercício 6
console.log("Exercício 6:")

const valesAtuais = [400, 450, 500, 380];
let valesCopia = [...valesAtuais]
let valesFinal = valesCopia.map((numero) => numero + 50)
console.log(`${valesFinal}, e ${valesAtuais} continua igual.`)

// Exercício 7
console.log("Exercício 7:")

const apresentacoes = ["Isabelle", "Francisco", "Guilherme"];
let ordem = apresentacoes.map((nome, indice) => `${indice + 1}° - ${nome}`)
console.log(ordem)

// Exercício 8
console.log("Exercício 8:")

let bomDia = equipe.map((nome) => `Bom dia, ${nome}!`)
console.log(bomDia)

// Exercício 9
console.log("Exercício 9:")

const bolosPorDia = [32, 18, 25, 40, 12, 27];
let vendas = bolosPorDia.filter((numero) => numero >= 25)
console.log(vendas)

// Exercício 10
console.log("Exercício 10:")

let nomesG = equipe.filter((nome) => nome.startsWith('G'))
console.log(nomesG)

// Exercício 11
console.log("Exercício 11:")

const horasExtras = [6, 2, 8, 0, 5, 7, 3, 9, 4, 10, 1, 6, 0, 12, 5, 2];
let horas = horasExtras.filter((hora) => (hora >= 5 && hora <= 10))
console.log(horas)

// Exercício 12
console.log("Exercício 12")

let nomesComposto = equipe.filter((nome) => nome.includes(" "))
console.log(nomesComposto.length, `Nomes - ${nomesComposto}`)

// Exercício 13
console.log("Exercício 13:")

let crachaEncontrado = equipe.find((nome) => nome.startsWith("Nic"))
console.log(`O Crachá encontrado é de ${crachaEncontrado}`)
let outroCracha = equipe.find((nome) => nome.startsWith("Zé"))
if (outroCracha == undefined) {
  console.log('Crachá "Zé" não pertence a ninguém da equipe')
} else {
  console.log(`O crachá pertence à ${outroCracha}`)
}

// Exercício 14
console.log("Exercício 14:")

let octavio = equipe.find((nome) => nome == 'Octavio')
let otavio = equipe.find((nome) => nome == 'Otavio')
console.log(`Octavio -> ${octavio}`)
console.log(`Otavio -> ${otavio}`)
let Octavio = equipe.findIndex((nome) => nome == 'Octavio')
let Otavio = equipe.findIndex((nome) => nome == 'Otávio')
console.log(`Posições: Octavio -> ${Octavio}, Otávio -> ${Otavio}`)
console.log("Para discutir: A busca deve ser exata porque se não for, o computador não vai encontrar o valor desejado")
let bonus = equipe.filter((nome) => nome.includes('Otávio'))
console.log(`Bônus: ${bonus}, aparece dois nomes porque o computador procura nome que incluem "Otávio"`)

// Exercício 15
console.log("Exercício 15:")

const equipeAcougue = ["Otávio", "Gustavo Augusto", "Pedro Junio"];
const usandoLuva = [true, true, false];
let testeLuva = usandoLuva.every((resultado) => resultado == true)
console.log(`every -> ${testeLuva}`)
let outroTeste = usandoLuva.some((resultado) => resultado == false)
console.log(`some -> ${outroTeste}`)
let naoUsa = usandoLuva.findIndex((resultado) => resultado == false)
console.log(`Posição ${naoUsa} -> ${equipeAcougue[naoUsa]}`)

// Exercício 16
console.log("Exercício 16:")

const filaAlmoco = ["Davi", "Erick", "Vinícius", "Heloa", "Nickson"];
let vinicius = filaAlmoco.findIndex((numero) => numero == 'Vinícius')
let breno = filaAlmoco.findIndex((numero) => numero == 'Breno')
console.log(`Vinícius -> Indice '${vinicius}'; Breno -> Indice '${breno}', porque ele não está na fila`)

// Exercício 17
console.log("Exercício 17:")

const vaquinha = [10, 15, 20, 5, 10];
const valorTotal = 80
let somaVaquinha = vaquinha.reduce((montante, valor) => montante + valor)
const soma = valorTotal - somaVaquinha
console.log(`Arrecadado -> ${somaVaquinha}; Faltam ${soma}`)

// Exercício 18
console.log("Exercício 18:")

const cadastrosHeloa = [14, 9, 21, 17, 11];
let maiorNumero = cadastrosHeloa.reduce((maiorAteAgora, numeroAtual) => {
  if (numeroAtual > maiorAteAgora) {
    return numeroAtual
  } else {
    return maiorAteAgora
  }
})
let dia = cadastrosHeloa.indexOf(maiorNumero)
console.log(`Maior numero: ${maiorNumero}, na posição ${dia} -> Quarta-Feira`)

// Exercício 19
console.log("Exercício 19:")

const plantoes = ["Emerson", "Jorge", "Emerson", "Eris", "Jorge", "Emerson", "Rafael"];
let plantoesEmerson = plantoes.reduce((contagem, nome) => {
  if (nome == 'Emerson') {
    return contagem + 1
  } else {
    return contagem
  }
}, 0)
let plantoesJorge = plantoes.reduce((contagem, nome) => {
  if (nome == 'Jorge') {
    return contagem + 1
  } else {
    return contagem
  }
}, 0)
console.log(`Emerson -> ${plantoesEmerson}; Jorge -> ${plantoesJorge}`)

// Exercício 20
console.log("Exercício 20:")

let horasExtra = horasExtras.filter((hora) => hora != 0)
let aumento = horasExtra.map((hora) => hora * 25)
let total = aumento.reduce((soma, valor) => soma + valor, 0)
console.log(`${horasExtra.length} registros; O array de valores tem ${aumento}; E total de ${total} Reais`)

// Exercício 21
console.log("Exercício 21:")

const vendasVinicius = [120, 45, 0, 300, 80, 0, 15, 210];
let vendasValidas = vendasVinicius.filter((vendas) => vendas != 0)
let vendasCanceladas = vendasVinicius.filter((vendas) => vendas == 0)
let vendasVal = vendasValidas.map((vendasValidas) => `R$${vendasValidas}`)
let vendaAcima = vendasValidas.find((vendas) => vendas > 100)
let vendasAcima = vendasValidas.some((vendas) => vendas > 250)
let vendaTotal = vendasValidas.reduce((soma, valor) => soma + valor, 0)
let maiorVenda = Math.max(...vendasValidas)
console.log(`Vendas Válidas -> ${vendasValidas}`)
console.log(`Canceladas -> ${vendasCanceladas.length}`)
console.log(`Textos -> ${vendasVal}`)
console.log(`Primeira acima de 100 -> ${vendaAcima}`)
console.log(`Alguma acima de 250 -> ${vendasAcima}`)
console.log(`Total -> ${vendaTotal}; Maior venda -> ${maiorVenda}`)
console.log(`Vinícius fez ${vendasValidas.length} vendas, total de R$${vendaTotal}`)

