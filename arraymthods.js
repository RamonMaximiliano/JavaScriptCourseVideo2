const users = [
    { id: '88f24bea-3825-4237-a0d1-efb6b92d37a4', firstName: 'Sam', lastName: 'Hughes' },
    { id: '2a35032d-e02b-4508-b3b5-6393aff75a53', firstName: 'Terri', lastName: 'Bishop' },
    { id: '7f053852-7440-4e44-838c-ddac24611050', firstName: 'Jar', lastName: 'Burke' },
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


function userID(){
    let userIDresult = ''
    for(x=0;x<users.length;x++){
    if (users[x].firstName === 'Madison' && users[x].lastName === 'Marshall'){
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
function changeColor(){
    if (    document.querySelector("div.changecolor").classList.contains("default")|| 
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
function changeColor2(){
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
function attributeTest(){
    let attribute = document.getElementById("attributeTest1").getAttribute("value");
    document.getElementById("attributeTest2").setAttribute("value", attribute);
    document.getElementById("attributeTest1").style.width = "500px"
    document.getElementById("attributeTest1").style.backgroundColor="green";
} 


