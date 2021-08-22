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


/*Capitalize first letter*/

function capitalize(){
    //pegando o valor da variavel frase
    let capitalizefrase = document.querySelector("input.capitalizedsentence").value
    // transformando o valor em string
    let capitalizefrasestring = String(capitalizefrase)
    //criando um array com tudo em lowercase e separando por espaço
    let capitalizefrasestring2 = capitalizefrasestring.toLowerCase().split(' ');
    console.log(capitalizefrasestring2)
    //fazendo o loop no array criado
    for(x = 0; x < capitalizefrasestring2.length;x++){
        //antes do + pega o primeiro character do item do array e tranforma ele em upper
        capitalizefrasestring2[x] = capitalizefrasestring2[x].charAt(0).toUpperCase() + capitalizefrasestring2[x].substring(1);
        //depois do + esta subtraindo o primeiro character e adicionando com o resto da palavra original
    }
    //o for acima esta passando uma palavra do array por vez
    // o join abaixo esta juntando todos os items do array com um espaço entre eles, formando uma nova string
    var finalcapitalized = capitalizefrasestring2.join(' ');
    console.log(finalcapitalized)
    document.querySelector("p.finalcapitalized").innerHTML = finalcapitalized
}
/*Capitalize first letter*/

/*Equal values*/

function unique() {
    let uniquestring = document.querySelector("input.valuesunique").value
    let uniquevalue = String(uniquestring)
    let comprim = uniquevalue.length 
    var valor1 = uniquevalue[0]
    for (xs=0; xs < uniquevalue.length; xs++ ){
         if(valor1 == uniquevalue[xs]){
            valor1 = uniquevalue[xs]
            vaisaber = true
        } else {
            vaisaber = false
            break
        }
    }
    console.log(vaisaber)
    document.querySelector("p.valuesuniqueanswer").innerHTML = `Values are equal? Answer is: <strong>${vaisaber}</strong>`
}
/*Equal values*/


function similarvalues(){
    let similarvalue = document.querySelector("input.similarvalue").value
    let similarvalueString = String(similarvalue)
    var similarvalueanalyze = similarvalueString[similarvalueString.length-1]
    console.log(similarvalueString)
    console.log(similarvalueString.length)
    console.log(similarvalueanalyze)

    for (xz=0; xz < similarvalueString.length; xz++){
        if(similarvalueanalyze == similarvalueString[xz]) {
            var finalsimilar = "The are equal values in the array"
            console.log(similarvalueanalyze)
            break
        }
        else {
            //similarvalueanalyze começa com o ultimo item do array, porém recebe o primeiro item após o primeiro loop
            //em seguida a cada novo loop o valor similarvalueString[xz] já é o item seguinte ao atual item do similarvalueanalyze, pois esta correndo o loop
            similarvalueanalyze = similarvalueString[xz]
            var finalsimilar = "The values are unique"
            console.log(similarvalueanalyze)
        }
    }
    console.log(finalsimilar)
    document.querySelector("p.similarvalueanswer").innerHTML = `${finalsimilar}`
}

