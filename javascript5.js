/*coding addict array biggest word 1*/

function checkSentence() {
    var sentenceOriginal = document.querySelector("input.mainsentence").value
    var sentence = String(sentenceOriginal)
    console.log(sentence)

    //O método split abaixo transformou ela em um array
    let palavra = sentence.split(' ');
    console.log(palavra)
    largura = 0;

    //o for abaixo pegou o numero de letras da maior palavra do array
    for (let i = 0; i < palavra.length; i++) {
        if (palavra[i].length > largura) {
            largura = palavra[i].length
        }
    }

    //o for abaixo pegou o item do array que tinha a mesma length que a largura encontrada no for acima
    for (let a = 0; a < palavra.length; a++) {
        if (largura == palavra[a].length) {
            console.log(palavra[a])
            document.querySelector("p.longestresult").innerHTML = `Esta é a maior palavra da frase: <strong>${palavra[a]}</strong>`
        }
    }
    return console.log(largura)
}
/*coding addict array biggest word 1*/









