/*Exercise 1*/
window.alert("Olá mundo!");
window.confirm("Você vai programar em JavaScript?")
nome = window.prompt("Qual seu nome?")
curso = window.prompt("Qual seu curso?")


/*Template string*/
window.alert(`Olá ${nome} seja bem vindo ao curso de ${curso}!`)

/*Parse integer*/
let numero1 = Number.parseInt(window.prompt("Qual 1° numero?"))
let numero2 = Number.parseInt(window.prompt("Qual 2° numero?"))
let soma = numero1 + numero2
window.alert(`A soma entre ${numero1} e ${numero2} é de ${soma}!`)

/*Parse float*/
let numero3 = Number.parseFloat(window.prompt("Qual 3° numero?"))
let numero4 = Number.parseFloat(window.prompt("Qual 4° numero?"))
let soma2 = numero3 + numero4
window.alert(`A soma entre ${numero3} e ${numero4} é de ${soma2}!`)

/*Exercise 1*/

palavra = window.prompt('Qual a palavra?')
document.write(`A sua palavra tem ${palavra.length} letras`)
document.write(`Esta foi sua <u>palavra</u>: ${palavra} <br>`)





