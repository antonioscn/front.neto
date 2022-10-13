//DESAFIOS EM JS

// criar variaveis com informações a respeito de um lutador
let nome = 'Fedor Vladimirovich Emanelianenko'
let nascionalidade = "Russo"
let idade = 44
let peso = 106
let altura = 1.83

document.write(`Lutador: ${nome} <br>`)
document.write(`Nascionalidade: ${nascionalidade} <br>`)
document.write(`Idade: ${idade} anos <br>`)
document.write(`Altura: ${altura} m<br>`)

//// //////////////////////////////////////////////

// Criar frase do dia com data, frase e autor

const dia = 10
const mes = 09
const ano = 2021
const FraseDoDia = "Seja curioso. Leia de tudo. Tente coisas novas. O que as pessoas chamam de inteligência se resume a curiosidade."
const Autoria = "Aaron Swartz"


document.write(`<div class="citacao">
                <h2>Frase do Dia</h2>
                <p>${dia}/${mes}/${ano}<p>
                ${FraseDoDia}
                <p>${Autoria}</p>
                </div>
               `)

/// criar array com mêses do ano
let mesesDoAno = ['Janeiro', 'Fevereiro', 'Março']

document.write(`<div class="meses">
                <h2>Array de Meses do Ano</h2>
                <p>${mesesDoAno[0]}, ${mesesDoAno[1]}, ${mesesDoAno[2]}, ... </p>
                </div>
              `)

/// Criar um objeto com nome do jogo, desenvolvimdo por:, e ano de lançamento
let jogo = {
    titulo : 'League Of Legends - LOL',
    desenvolvedor : 'Riot Games',
    anoLancamento : 2009
}

document.write(`<div class="jogo">
                <h2>Jogo</h2>
                <p>Título: ${jogo.titulo}</p>
                <p>Desenvolvedor: ${jogo.desenvolvedor}</p>
                <p>Ano do Lançamento: ${jogo.anoLancamento}</p>
                </div>
              `)