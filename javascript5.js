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

function capitalize() {
    //pegando o valor da variavel frase
    let capitalizefrase = document.querySelector("input.capitalizedsentence").value
    // transformando o valor em string
    let capitalizefrasestring = String(capitalizefrase)
    //criando um array com tudo em lowercase e separando por espaço
    let capitalizefrasestring2 = capitalizefrasestring.toLowerCase().split(' ');
    console.log(capitalizefrasestring2)
    //fazendo o loop no array criado
    for (x = 0; x < capitalizefrasestring2.length; x++) {
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
    for (xs = 0; xs < uniquevalue.length; xs++) {
        if (valor1 == uniquevalue[xs]) {
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

function similarvalues() {
    let similarvalue = document.querySelector("input.similarvalue").value
    let similarvalueString = String(similarvalue)
    var similarvalueanalyze = similarvalueString[similarvalueString.length - 1]
    console.log(similarvalueString)
    console.log(similarvalueString.length)
    console.log(similarvalueanalyze)

    for (xz = 0; xz < similarvalueString.length; xz++) {
        if (similarvalueanalyze == similarvalueString[xz]) {
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



//Esta função é só pra praticar criar um array com o spread operator
function uniqueVideo(str) {
    let valuesVideo = [];
    for (let letter of str) {
        console.log(valuesVideo.indexOf(letter));
        //com o spread operator abaixo ele esta dando ao array valuesVideo os seus proprios valores e mais a variavel letter da vez no loop
        //é como se fosse o push, ou o +=, o array esta recebendo ele mesmo mais a letter
        valuesVideo = [...valuesVideo, letter];
    }
    console.log(valuesVideo)
    return str;
}
console.log(uniqueVideo("123456"))
console.log(uniqueVideo("132321321"))


//Esta função verifica se os valores são unicos em um array:
function uniqueVideo2(str2) {
    let valuesVideo2 = [];
    for (let letter2 of str2) {
        //for acima esta procurando o index do item do array na segunda lista criada, 
        //por exemplo para o segundo array, quando chegar no numero 3 que é o primeiro que se repete, vai ver que seu indice no novo array é 2, portanto diferente de -1, sendo assim vai retornar false, ou seja, falso para pergunta, "os valores são unicos?"
        if (valuesVideo2.indexOf(letter2) !== -1) {
            return false;
        }
        valuesVideo2.push(letter2)
    }
    console.log(valuesVideo2)
    return true;
}
console.log(`Os valores são unicos? ${uniqueVideo2("123456")}`)
console.log(`Os valores são unicos? ${uniqueVideo2("13321321")}`)


/*Equal values*/


function sumNumbers() {
    let sumarray = document.getElementById("sumvalue").value
    let sumarrayfinal = String(sumarray)
    var newarray = []

    for (xa = 0; xa < sumarrayfinal.length; xa++) {
        console.log(xa)
        newarray.push(Number(sumarrayfinal[xa]))
    }
    console.log(newarray)
    console.log(sumarrayfinal)

    //abaixo pega o maior numero do array
    let biggest = 0
    for (xd = 0; xd < newarray.length; xd++) {
        if (biggest < newarray[xd]) {
            biggest = newarray[xd]
        }
    }
    console.log(biggest)
    var sumOffAll = 0

    for (xe = 0; xe < newarray.length; xe++) {
        sumOffAll += newarray[xe]
    }
    console.log(sumOffAll)
    var endingsum = sumOffAll - biggest

    if (endingsum <= biggest) {
        var finallySum = false
    } else {
        finallySum = true
    }

    document.querySelector("p.resultsum").innerHTML = `A soma dos numeros menos o maior é <strong>${endingsum}</strong> e o maior é <strong>${biggest}</strong>.<br> Portanto o resultado é <strong>${finallySum}</strong>`

}


function changeItem() {

    let products = [
        {
            title: "Iphone 8",
            company: "apple"
        },
        {
            title: "galaxy",
            company: "samsung"
        },
        {
            title: "Iphone 9",
            company: "apple"
        },
        {
            title: "galaxy 2",
            company: "samsung"
        },
        {
            title: "razor",
            company: "motorola"
        },
        {
            title: "razor 2",
            company: "motorola"
        }
    ]


    //var testItem = 'Hello World'
    var pickSelect = document.getElementById("select1")
    //let newListItem = document.createElement("option")
    //A busca no objecto abaixo pega qual nome do objeto "products", qual item da lista "[0]" neste caso o primeiro, e qual das opções quero "title", retornando assim: "Iphone 8"
    /*let newListItemContent = document.createTextNode(products[0].company)
    newListItem.appendChild(newListItemContent)
    pickSelect.appendChild(newListItem)
    console.log(newListItem)*/


    // Esta pegando o valor do primeiro select
    var contentofSelect = pickSelect.value
    console.log(contentofSelect)

    // colocando o valor no segundo select de acordo com o que esta selecionado no primeiro
    if (contentofSelect == "apple") {
        var selectProducts = document.getElementById("select2")
        //a linha abaixo é importante para limpar o select element, caso contrário os produtos vão acumulando cada vez que troca a marca 
        selectProducts.innerHTML = ''
        let newProductOption1 = document.createElement("option")
        let newProductOption2 = document.createElement("option")
        let newProduct1 = document.createTextNode("Iphone 8")
        let newProduct2 = document.createTextNode("Iphone 9")

        newProductOption1.appendChild(newProduct1)
        newProductOption2.appendChild(newProduct2)
        selectProducts.appendChild(newProductOption1)
        selectProducts.appendChild(newProductOption2)
    }
    else if (contentofSelect == "samsung") {
        var selectProducts = document.getElementById("select2")
        //a linha abaixo é importante para limpar o select element, caso contrário os produtos vão acumulando cada vez que troca a marca 
        selectProducts.innerHTML = ''
        let newProductOption1 = document.createElement("option")
        let newProductOption2 = document.createElement("option")
        let newProduct1 = document.createTextNode("galaxy 1")
        let newProduct2 = document.createTextNode("galaxy 2")

        newProductOption1.appendChild(newProduct1)
        newProductOption2.appendChild(newProduct2)
        selectProducts.appendChild(newProductOption1)
        selectProducts.appendChild(newProductOption2)
    }
    else if (contentofSelect == "motorola") {
        var selectProducts = document.getElementById("select2")
        //a linha abaixo é importante para limpar o select element, caso contrário os produtos vão acumulando cada vez que troca a marca 
        selectProducts.innerHTML = ''
        let newProductOption1 = document.createElement("option")
        let newProductOption2 = document.createElement("option")
        let newProduct1 = document.createTextNode("razor 1")
        let newProduct2 = document.createTextNode("razor 2")

        newProductOption1.appendChild(newProduct1)
        newProductOption2.appendChild(newProduct2)
        selectProducts.appendChild(newProductOption1)
        selectProducts.appendChild(newProductOption2)
    }
}


/*Criar uma lista final com somente uma ocorrencia de cada item "company"*/
let brands1 = [
    {
        title: "Iphone 8",
        company: "apple"
    },
    {
        title: "galaxy",
        company: "samsung"
    },
    {
        title: "Iphone 9",
        company: "apple"
    },
    {
        title: "galaxy 2",
        company: "samsung"
    },
    {
        title: "razor",
        company: "motorola"
    },
    {
        title: "razor 2",
        company: "motorola"
    }
]

var ListOfProductsTest = []
for (ab = 0; ab < brands1.length; ab++) {
    var productPlace = brands1[ab].company
    console.log(brands1[ab].company)
    var indexofCurrentItem1 = brands1.map(function (random) { return random.company; }).indexOf(productPlace)
    console.log(indexofCurrentItem1)

    var indexofCurrentItem = ListOfProductsTest.indexOf(brands1[ab].company)
    console.log(indexofCurrentItem)

    if (indexofCurrentItem == -1) {
        ListOfProductsTest.push(brands1[ab].company)
    }
}

console.log(`This is your final one item list: ${ListOfProductsTest}`)

/*Criar uma lista final com somente uma ocorrencia de cada item "company"*/



/*How to find index of an object item based on its atributes*/

var ProductsListTest = [
    { id_list: 1, name: 'Nick', token: '121212' },
    { id_list: 2, name: 'John', token: '353535' },
    { id_list: 3, name: 'Robert', token: '696969' },
]

//Map function to find the index of an object atribute
var indexOfProduct = ProductsListTest.map(function (randomdata) { return randomdata.name; }).indexOf('Jess')
console.log(indexOfProduct)

/*How to find index of an object item based on its atributes*/



/*Filter single items from an object*/
var myListOfProducts = [
    {
        title: "Iphone 8",
        company: "apple"
    },
    {
        title: "galaxy",
        company: "samsung"
    },
    {
        title: "Iphone 9",
        company: "apple"
    },
    {
        title: "galaxy 2",
        company: "samsung"
    },
    {
        title: "razor",
        company: "motorola"
    },
    {
        title: "razor 2",
        company: "motorola"
    }
]
function getUnique(arr) {
    //map, pega somente os items company
    let tempArr = arr.map(item => item.company);
    //set pega os items de tempArr e mostra só uma ocorrencia de cada
    return [...new Set(tempArr)];
}
console.log(getUnique(myListOfProducts))

/*Filter single items from an object*/


function findDuplicate() {
    var duplicateString = document.getElementById("duplicatevalues").value
    var duplicaFinalteString = String(duplicateString)
    console.log(duplicaFinalteString)
    var resultDuplicateValues = [...new Set(duplicaFinalteString)]
    document.querySelector("p.resultDuplicateValues").innerHTML = `These are the single values: <strong>${resultDuplicateValues}</strong>`

}

/*return number with most repeats*/

function mostRepeats(array) {
    var mostRepeatsArray = []
    var finalMostRepetas = []
    for (let itemmost in array) {
        // console.log(array[itemmost])
        console.log(array[itemmost])
        if (mostRepeatsArray.indexOf(array[itemmost]) !== -1) {
            finalMostRepetas.push(array[itemmost])
        }
        mostRepeatsArray.push(array[itemmost])
    }
    console.log(mostRepeatsArray)
    //below result is a new array only with the numbers that repeat
    console.log(finalMostRepetas.sort())
}

console.log(mostRepeats([2, 3, 5, 2, 6, 5, 3, 2, 5, 2, 6, 2]))

/*return number with most repeats*/


/*Is it a prime number?*/
function primeNUmber() {
    let numberPrime1 = document.querySelector("input.primenumber").value
    let numberPrime = Number(numberPrime1)
    if (numberPrime % 2 == 1) {
        var veredito = true
    } else { veredito = false }
    document.querySelector("p.primenumberResult").innerHTML = `The number ${numberPrime} is odd? <strong>${veredito}</strong>`
}
/*Is it a prime number?*/


/*contar letras*/

function countLetters(){
    var repeatLetters = document.querySelector("input.countletters").value
    var repeatLetters = String(repeatLetters)
    //Transformando a string em um array
    var repeatLettersArray = repeatLetters.split('')
    var finalLetterRepeat = []

    for (lr = 0; lr < repeatLettersArray.length; lr++) {
        //pegando indice da letra atual no objeto novo criado
        console.log(finalLetterRepeat.map(letter => letter.Letra).indexOf(repeatLettersArray[lr]))
        // se o indice for -1, adiciona a letra
        if(finalLetterRepeat.map(letter => letter.Letra).indexOf(repeatLettersArray[lr]) == -1){
            finalLetterRepeat.push({Letra: repeatLettersArray[lr], quantidade: 1})
        } else {
            console.log(`Este é o indice: ${finalLetterRepeat.map(letter => letter.Letra).indexOf(repeatLettersArray[lr])}`)
            //pegando indice da letra atual no objeto novo criado
            var indicedaletra = finalLetterRepeat.map(letter => letter.Letra).indexOf(repeatLettersArray[lr])
            //pegando o valor do atributo quantidade no item conforme o indice achado acima
            var quantidadevelha = finalLetterRepeat[indicedaletra].quantidade
            console.log(`Essa é a quantidade ${quantidadevelha}`)
            // substituindo o item do array com a letra e pegando a sua quantidade original mais 1
            finalLetterRepeat[indicedaletra] = ({Letra: repeatLettersArray[lr], quantidade: quantidadevelha += 1})
        }
    }
    //convertendo o objecto para string:
    var finalletterscount = JSON.stringify(finalLetterRepeat)
    document.querySelector("p.countlettersresult").innerHTML = finalletterscount
    console.log(finalletterscount)
    console.log(finalLetterRepeat);
}

/*contar letras*/