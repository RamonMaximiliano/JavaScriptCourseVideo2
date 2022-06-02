const users = [
    { id: '2a35032d-e02b-4508-b3b5-6393aff75a53', firstName: 'Terri', lastName: 'Bishop' },
    { id: '7f053852-7440-4e44-838c-ddac24611050', firstName: 'Jar', lastName: 'Burke' },
    { id: '88f24bea-3825-4237-a0d1-efb6b92d37a4', firstName: 'Sam', lastName: 'Hughes' },
    { id: 'd456e3af-596a-4224-b1dc-dd990a34c9cf', firstName: 'Julio', lastName: 'Miller' },
    { id: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', firstName: 'Chester', lastName: 'Flores' },
    { id: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', firstName: 'Madison', lastName: 'Marshall' },
    { id: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', firstName: 'Ava', lastName: 'Pena' },
    { id: '7f0ce45a-bdca-4067-968b-d908e79276ce', firstName: 'Gabriella', lastName: 'Steward' },
    { id: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', firstName: 'Charles', lastName: 'Campbell' },
    { id: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', firstName: 'Madison', lastName: 'Lambert' },
];

const comments = [
    { userId: '88f24bea-3825-4237-a0d1-efb6b92d37a4', text: 'Great Job!' },
    { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'Well done, I think I understand now!' },
    { userId: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', text: 'How do you do that? 😲' },
    { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'OK great thanks' },
    { userId: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', text: 'Cool, thanks!' },
    { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Nice one 😉' },
    { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Got it.' },
    { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Thanks!' },
    { userId: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', text: 'Cool 😀' },
    { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Great stuff!' },
];

function whoWrote() {
    let userWroteID = comments[0].userId
    let finalWhoWrote = users.find(function (personWrote) {
        return personWrote.id === userWroteID
    })
    document.getElementById("thisWrote").innerHTML = (`This is the person who wrote the first comment: <strong>${finalWhoWrote.firstName} ${finalWhoWrote.lastName}</strong>`)
}


function greatThanks() {
    let comment = comments.find(function (whoCommented) {
        return whoCommented.text === "OK great thanks"
    })
    console.log(comment.userId)

    let thisCommented = users.find(function (commenter) {
        return commenter.id === comment.userId
    })
    console.log(thisCommented)
    document.getElementById("greatThanks").innerHTML = (`This is the one who commented: <strong>${thisCommented.firstName} ${thisCommented.lastName} </strong>`)
}


function userID() {
    let userIDresult = ''
    for (x = 0; x < users.length; x++) {
        if (users[x].firstName === 'Madison' && users[x].lastName === 'Marshall') {
            userIDresult = (`The user ID of <strong>${users[x].firstName}</strong> <strong>${users[x].lastName}</strong> is <strong>${users[x].id}</strong>`)
            break
        } else {
            userIDresult = 'There is no user with this name'
        }
    }
    document.getElementById("userID").innerHTML = userIDresult
}


// the below exercise was to practice adding and remobing class of an elemnt with "classList" method
// contains check if the class is in the element
// o value é bom para manipular um input tag por exemplo
function changeColor() {
    if (document.querySelector("div.changecolor").classList.contains("default") ||
        document.querySelector("div.changecolor").classList.contains("green")
    ) {
        document.getElementById("inputtest").value = (`Escolheu RED`)
        document.querySelector("div.changecolor").classList.remove("green");
        document.querySelector("div.changecolor").classList.remove("default");
        document.querySelector("div.changecolor").classList.add("red");
        document.querySelector("div.changecolor").innerHTML = `<strong>Red</strong>`
    }
}
// dava pra unir as duas com um "else if"
function changeColor2() {
    if (document.querySelector("div.changecolor").classList.contains("default") ||
        document.querySelector("div.changecolor").classList.contains("red")
    ) {
        document.getElementById("inputtest").value = (`Escolheu GREEN`)
        document.querySelector("div.changecolor").classList.remove("red");
        document.querySelector("div.changecolor").classList.remove("default");
        document.querySelector("div.changecolor").classList.add("green");
        document.querySelector("div.changecolor").innerHTML = `<strong>Green</strong>`
    }
}

//testing get and set attribute DOM methods
function attributeTest() {
    let attribute = document.getElementById("attributeTest1").getAttribute("value");
    document.getElementById("attributeTest2").setAttribute("value", attribute);
    document.getElementById("attributeTest1").style.width = "500px"
    document.getElementById("attributeTest1").style.backgroundColor = "green";
}


// O Exercicio/Aula abaixo esta pegando dados de uma API e mostrando no navegador


//O async só informa ao JS que dentro daquele bloco de código haverá o await sendo utilizado, o async sempre vai antes da function
async function loadPosts() {
    //fetch normalmente tem 2 parametros, a URL, e um objeto com os detalhes do que se esta pegando, se não põe o segundo parametro ele faz o GET por default
    let requisicao = await fetch('https://jsonplaceholder.typicode.com/users');
    // se não colocar o await abaixo, ele tenta transformar a requisição em json antes do fetch terminar, e então da erro
    let jaison = await requisicao.json();
    document.getElementById("posts").innerHTML = (`<strong>${jaison.length} users:</strong>`);
    usersData(jaison);

    //Código acima refaturou o de abaixo porém usando async/await
    /*fetch('https://jsonplaceholder.typicode.com/users')
        .then(function (resultado) {
            //o .json esta convertendo a requisição em um json inteligivel para o navegador
            return resultado.json();
        })//este resultado tbm vai retornar uma promisse, por isso o .then abaixo
        .then(function(json){
            document.getElementById("posts").innerHTML = (`<strong>${json.length} users:</strong>`)
            //o resultado retornado foi um array com todos os objetos dentro
            console.log(json);
            usersData(json);
        })
        .catch(function () {
            console.log("Deu erro");
        })*/
}

// Esta função esta sendo chamada na outra função acima
function usersData(lista) {
    let usersArray = []
    for (item in lista) {
        //o item acima recebe só o indice do array e não o valor
        let userData = `Indice: ${lista[item].id} <br>Nome: ${lista[item].name} <br>Cidade: ${lista[item].address.city}<hr>`
        console.log(userData);
        usersArray.push(userData)
        console.log(usersArray);
    }
    document.getElementById("users").innerHTML = usersArray
}


// Método POST com o fetch
async function postMethod() {
    let wow = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Titulo de teste',
            body: 'Corpo teste',
            userId: 5
        }),
        headers: {
            'content-type': 'application/json'
        }
    });
    let postJson = await wow.json();

    console.log(postJson)
    document.getElementById("postMethod").innerHTML = JSON.stringify(postJson);
}

//se aciona o botão sem carregar arquivos, o filelist fica vazio, ele vai adicionando arquivos conforme fazemos o upload
async function sendFile() {
    let file = document.getElementById("file").files[0];
    let body = new FormData();
    body.append("Tittle", "Free text");
    body.append("Arquivo", file);
    console.log(file)

    let requis = await fetch("www.minhaurl.com", {
        method: "POST",
        body: body,
        headers: {
            "Content-type": "multipart/form-data"
        }
    });
    console.log(requis)
    console.log(body)
}



//Uma thumbnail é uma imagem em miniatura e comprimida usada na internet para prever a imagem original.
function showImage() {
    //pegou o arquivo e colocou numa variavel
    let image = document.getElementById("image").files[0];
    console.log(image)

    //criou o elemento tag img
    let img = document.createElement("img");
    //criou o atributo source com uma URL
    img.src = URL.createObjectURL(image)
    //definiu a width da imagem
    img.width = 200;

    //inseriu a imagem como child da div
    document.getElementById("divImage").appendChild(img)
}



function addNameComment() {
    for (item in comments) {
        for (names in users) {
            if (comments[item].userId == users[names].id) {
                console.log(`${comments[item].text} comment by: ${users[names].firstName} ${users[names].lastName}`)
                document.querySelector(".addNameComment" + item).innerHTML = (`Comment: ${comments[item].text} made by: ${users[names].firstName} ${users[names].lastName}`)
            }
        }
    }
}

function haveNoComment() {
    let noCommentList = []
    let noComments = users.filter(
        item => !comments.find(item2 => item2.userId === item.id));
    noComments.forEach(element => {
        noCommentList.push(`${element.firstName} ${element.lastName} </br>`)
    });
    document.getElementById("noComment").innerHTML = noCommentList
}


/* user id for comments array   */