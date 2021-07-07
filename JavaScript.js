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
    document.getElementById("elementodiv").style.backgroundColor="red";
    document.getElementById("elementodiv").innerText="Clicou";
} 

function emcima() {
    document.getElementById("elementodiv").style.backgroundColor="yellow";
    document.getElementById("elementodiv").innerText="Em cima";
}

function fora() {
    document.getElementById("elementodiv").style.backgroundColor="blue";
    document.getElementById("elementodiv").innerText="Saiu";
}


function somar(){
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2"); 
    let num5 = Number(num1.value)
    let num6 = Number(num2.value)
    let num3 = num5 + num6;
    document.getElementById("num3").innerHTML= (`A soma entre ${num5} e o numero ${num6} resulta em: <strong>${num3}</strong>`);
}

