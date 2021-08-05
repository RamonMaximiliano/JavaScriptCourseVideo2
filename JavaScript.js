/*

Exercise 1 

window.alert("Olá mundo!");
window.confirm("Você vai programar em JavaScript?")
nome = window.prompt("Qual seu nome?")
curso = window.prompt("Qual seu curso?")


Template string
window.alert(`Olá ${nome} seja bem vindo ao curso de ${curso}!`)

Parse integer
let numero1 = Number.parseInt(window.prompt("Qual 1° numero?"))
let numero2 = Number.parseInt(window.prompt("Qual 2° numero?"))
let soma = numero1 + numero2
window.alert(`A soma entre ${numero1} e ${numero2} é de ${soma}!`)

Parse float
let numero3 = Number.parseFloat(window.prompt("Qual 3° numero?"))
let numero4 = Number.parseFloat(window.prompt("Qual 4° numero?"))
let soma2 = numero3 + numero4
window.alert(`A soma entre ${numero3} e ${numero4} é de ${soma2}!`)

Exercise 1
palavra = window.prompt('Qual a palavra?')
document.write(`A sua palavra tem ${palavra.length} letras`)
document.write(`Esta foi sua <u>palavra</u>: ${palavra} <br>`)

*/

addEventListener('click', clicando)

function clicando() {
    document.getElementById("elementodiv").style.backgroundColor = "red";
    document.getElementById("elementodiv").innerText = "Clicou";
}

function emcima() {
    document.getElementById("elementodiv").style.backgroundColor = "yellow";
    document.getElementById("elementodiv").innerText = "Em cima";
}

function fora() {
    document.getElementById("elementodiv").style.backgroundColor = "blue";
    document.getElementById("elementodiv").innerText = "Saiu";
}


function somar() {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let num5 = Number(num1.value)
    let num6 = Number(num2.value)
    let num3 = num5 + num6;
    document.getElementById("num3").innerHTML = (`A soma entre ${num5} e o numero ${num6} resulta em: <strong>${num3}</strong>`);
}

function velocid() {
    let valo = document.getElementById("vel")
    let valo1 = Number(valo.value)
    document.getElementById("velocidade").innerHTML = (`A sua velocidade é de <strong>${valo1}</strong> Km/H`)
    if (valo1 > 80) {
        document.getElementById("ifresult").innerHTML = (`Você será <strong>multado!</strong>`)
    }
    else {
        document.getElementById("ifresult").innerHTML = (`Você um é <b>bom</b> motorista!`)
    }
}


function possoDirigir() {
    let idademotorista = document.querySelector('input.idadecarteira')
    let idademotoristafinal = Number(idademotorista.value)

    if (idademotoristafinal >= 18 && idademotoristafinal < 60) {
        document.querySelector('p.resultadocarteira').innerHTML = (`Sua idade é ${idademotoristafinal}, você esta autorizado a dirigir!`)
    }
    else if (idademotoristafinal < 18) {
        document.querySelector('p.resultadocarteira').innerHTML = (`Sua idade é ${idademotoristafinal}, você ainda é muito jovem para dirigir!`)
    }
    else {
        document.querySelector("p.resultadocarteira").innerHTML = (`Sua idade é ${idademotoristafinal}, você pode dirigir mas precisa comprovar que encherga bem!`)
    }
}


function diasemana() {
    /* Date objects are created with new Date().*/
    let now = new Date()
    /*The below getDay is a Date Object Methods*/
    let diadasemana = now.getDay()
    switch (diadasemana) {
        case 1:
            document.querySelector('p.diasemana').innerHTML = (`Hoje é Segunda`)
            break
        case 2:
            document.querySelector('p.diasemana').innerHTML = (`Hoje é Terça`)
            break
        case 3:
            document.querySelector('p.diasemana').innerHTML = (`Hoje é Quarta`)
            break
        case 4:
            document.querySelector('p.diasemana').innerHTML = (`Hoje é Quinta`)
        case 5:
            document.querySelector('p.diasemana').innerHTML = (`Hoje é Sexta`)
            break
        case 6:
            document.querySelector('p.diasemana').innerHTML = (`Hoje é Sabado`)
        case 0:
            document.querySelector('p.diasemana').innerHTML = (`Hoje é Domingo`)
            break
        default:
            document.querySelector('p.diasemana').innerHTML = (`Não sei que dia é!`)
            break
    }
}



/*Exercicio dia*/

function horadia() {
    let hora = new Date()
    let horaexata = hora.getHours()

    document.getElementById("hora").innerHTML = (`<h3>Agora são ${horaexata} horas</h3>`)
    if (horaexata > 19 || horaexata < 8) {
        document.querySelector('div.imagem').style.backgroundImage = "url('/images/noite.jpg')"
        document.body.style.backgroundColor = "rgb(6, 7, 94)"
    }
    else if (horaexata > 8 && horaexata < 12) {
        document.querySelector('div.imagem').style.backgroundImage = "url('/images/manha.jpg')"
        document.body.style.backgroundColor = "rgb(13, 235, 13)"
    }
    else if (horaexata > 12 && horaexata < 16) {
        document.querySelector('div.imagem').style.backgroundImage = "url('/images/tarde.jpeg')"
        document.body.style.backgroundColor = "rgb(235, 220, 13)"
    }
    else /*(horaexata > 16 && horaexata < 19  )*/ {
        document.querySelector('div.imagem').style.backgroundImage = "url('/images/tardinha.jpg')"
        document.body.style.backgroundColor = "rgb(248, 102, 4)"
    }
}

window.onload = horadia()

/*Exercicio dia*/



/*Verificador idade*/

function veridade() {
    /*Para o query selector tem que ser a classe não o ID do elemento*/
    let idadefinal1 = document.querySelector('input.smalltext')
    let idadeinter = Number(idadefinal1.value)
    let idadefinal = 2021 - idadeinter
    if (document.getElementById('masc').checked) {
        var prefer = 'homem'
    } else if (document.getElementById('femin').checked) {
        var prefer = 'mulher'
    } else {
        var prefer = '"Sem sexo"'
    }
    document.getElementById('fraseidade').innerHTML = (`Detectamos <strong>${prefer}</strong> com <strong>${idadefinal}</strong> anos de idade!`)


    /*Verificador homem*/
    if (idadefinal <= 5 && document.getElementById('masc').checked) {
        document.getElementById('imagemage').style.backgroundImage = "url('/images/menino.jpg')"
    }
    else if (idadefinal <= 15 && idadefinal > 5 && document.getElementById('masc').checked) {
        document.getElementById('imagemage').style.backgroundImage = "url('/images/guri.jpg')"
    }
    else if (idadefinal <= 50 && idadefinal > 15 && document.getElementById('masc').checked) {
        document.getElementById('imagemage').style.backgroundImage = "url('/images/homem.jpg')"
    }
    else if (idadefinal <= 150 && idadefinal > 50 && document.getElementById('masc').checked) {
        document.getElementById('imagemage').style.backgroundImage = "url('/images/idoso.jpg')"
    }
    /*Verificador mulher*/
    if (idadefinal <= 5 && document.getElementById('femin').checked) {
        document.getElementById('imagemage').style.backgroundImage = "url('/images/menina.jpg')"
    }
    else if (idadefinal <= 15 && idadefinal > 5 && document.getElementById('femin').checked) {
        document.getElementById('imagemage').style.backgroundImage = "url('/images/guria.jpg')"
    }
    else if (idadefinal <= 50 && idadefinal > 15 && document.getElementById('femin').checked) {
        document.getElementById('imagemage').style.backgroundImage = "url('/images/mulher.jpg')"
    }
    else if (idadefinal <= 150 && idadefinal > 50 && document.getElementById('femin').checked) {
        document.getElementById('imagemage').style.backgroundImage = "url('/images/idosa.jpg')"
    }
}

/*Verificador idade*/


/*Number Count*/

function countSpace() {
    let count1 = document.getElementById('countnumber1')
    let countnumber1 = Number(count1.value)

    let count2 = document.getElementById('countnumber2')
    let countnumber2 = Number(count2.value)

    let count3 = document.getElementById('countnumber3')
    let countnumber3 = Number(count3.value)


    /*Estrutura abaixo esta criando o elemento span no HTML*/
    for (let countnumber1 = Number(count1.value); countnumber1 < countnumber2; countnumber1 += countnumber3) {
        /*usada span tag para numeros ficarem em linha*/
        let elementocriado = document.createElement("span")
        /*concatenado um espaço para os numeros não ficarem colados*/
        /*O código do emoji tem que estar com esta barra, mais o "u" e entre chaves o código html do emoji:\u{1F929}*/
        let conteudo = document.createTextNode(countnumber1 + ' - \u{1F929} ')
        elementocriado.appendChild(conteudo)
        let elementodestino = document.querySelector('div.countdiv')
        elementodestino.appendChild(elementocriado)
    }
}

/*fazer ainda a contagem regressiva*/

/*tabuada*/


function fazerTabuada() {
    let tabuadaNumber1 = document.getElementById('numerotabuada')
    let tabuadaNumber = Number(tabuadaNumber1.value)
    let tabuadafinal = document.querySelector('select.resulttabuada')
    tabuadafinal.innerHTML = '' 
    
    if (tabuadaNumber > 0) {


    for (let somador = 1; somador < 11; somador += 1) {
        let newOption = document.createElement("option")
        let tabuadaItem = document.createTextNode(tabuadaNumber + ' X ' + somador + ' = ' + tabuadaNumber * somador)
        newOption.appendChild(tabuadaItem)
        tabuadafinal.appendChild(newOption)
    } }

    else {
        window.alert('Digite um numero acima de zero!')
    }
}

/*tabuada*/

/*Analisador de numeros*/


function analise(){
    let numeroAdicionado1 = document.getElementById("numeroAdicionado")
    var numeroAdicionado = Number(numeroAdicionado1.value)
    let finalSelect = document.getElementById("displayarray")
    finalSelect.innerHTML = '' 


    if (numeroAdicionado > 0 && numeroAdicionado <= 100){
        for (let x=0;x<=10;x+=1) {
        /*let numeroAdicionado1 = document.getElementById("numeroAdicionado")
        let numeroAdicionado = Number(numeroAdicionado1.value)
        let finalSelect = document.getElementById("displayarray")*/
        var NovoItemLista = document.createElement("option")
        let resultadiFimNumero = document.createTextNode(numeroAdicionado)
        NovoItemLista.appendChild(resultadiFimNumero)
        finalSelect.appendChild(NovoItemLista)

    }}
    else {
        window.alert('Escolha um numero válido!')
    }
}


/* Foi possivel pegar a variável numeroAdicionado.value pois esta com value, e na função acima ela esta como VAR portanto se torna global*/
function analiseFinal(){
    let numeroAdicionado1 = document.getElementById("numeroAdicionado")
    var numeroAdicionado = Number(numeroAdicionado1.value)
    var listaAnalNum = ['10']
    for (let y=0;y<=10;y+=1){
    listaAnalNum.push(numeroAdicionado)
    document.querySelector('p.rasultadoNumberanalis').innerHTML = (`Esse é o resultado ${listaAnalNum}`)}
}

/*Analisador de numeros*/



/*Nota aluno*/


function calculonota(){
    let notaalunooriginal = document.querySelector("input.notaalunooriginal")
    var notaalunooriginal2 = Number(notaalunooriginal.value)
    if (notaalunooriginal2 <= 60) {
        document.querySelector("p.recultadodanota").innerHTML = (`A nota do aluno é F`)
    }
    else if (notaalunooriginal2 > 60 && notaalunooriginal2 <= 69) {
        document.querySelector("p.recultadodanota").innerHTML = (`A nota do aluno é D`)
    }
    else if (notaalunooriginal2 >= 70 && notaalunooriginal2 <= 79) {
        document.querySelector("p.recultadodanota").innerHTML = (`A nota do aluno é C`)
    }
    else if (notaalunooriginal2 >= 80 && notaalunooriginal2 <= 89) {
        document.querySelector("p.recultadodanota").innerHTML = (`A nota do aluno é B`)
    }
    else {
        document.querySelector("p.recultadodanota").innerHTML = (`A nota do aluno é A`)
    }
}



