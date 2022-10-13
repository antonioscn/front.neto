/* Arquivo JS aula 09 DOM + alterar CSS */

let titulo = document.querySelector('h1')       //selecionandoi h1 em uma variável
titulo.textContent = 'Aula 09 Manipular CSS - Aula 09'    // setando um novo titulo
//titulo.innerHTML = 'Aula Manipular CSS'

let imagem = document.querySelector('#foto') // selecionando uma imagem
imagem.setAttribute('src', './pride-fc.jpg') //setando novos atributos para essa imagem
imagem.setAttribute('width', '280px')        //setando novos atributos para essa imagem

/* MANIPULAR CSS */
//document.querySelector('h1').style.color = "red";
titulo.style.color = "red";
titulo.style.backgroundColor = "#000";
titulo.style.borderBottom = "2px solid red";
titulo.style.padding = "0.625rem";
titulo.style.borderRadius = "5px";
titulo.style.textAlign = "center"

let box = document.querySelectorAll('.box') // selecionando todas as box
box[0].setAttribute('class', 'escura')  //setando uma nova classe, com o nome "escura"
box[0].removeAttribute('class') // removendo a classe

/////// MODOS DE COR ///////

let tela = document.querySelector('main')       //armazenando todo o documento

let btnDark = document.querySelector('#btdark') // armazenando o botão dark

let btnLight = document.querySelector('#btlight')// armazenando o botão ligth

btnDark.addEventListener('click', modoDark) //observando o evento de click no botão e passando uma função caso isso ocorra
btnLight.addEventListener('click', modoLight)

//função para modo dark
function modoDark() {
    //event.preventDefault();
    console.log('modo dark')    //mostrando o que ta acontecendo no console
    tela.classList.add("dark","centro"); //setando na tela duas classe chamada dark
    tela.classList.remove("light"); //tirando a classe ligth
}

function modoLight() {
    //event.preventDefault();
    console.log('modo light')
    tela.classList.remove("dark", "centro");
    tela.classList.add("light");
}

/*
titulo.addEventListener('click', mudarId)
function mudarId() {
    titulo.id = 'titulo'
    console.log(titulo.id)
}
*/