function generate() {
    //Math random creates the random number, Math floor, rounds that num,ber to the minumum integer of it (example 10.56656 > 10)
    let randomNUmber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNUmber)
    document.querySelector("p.Generate").innerHTML = (`The number is <strong>${randomNUmber}</strong>`)

    /*
// 0 -> 10
Math.floor(Math.random() * 11);
// 1 -> 10
Math.floor(Math.random() * 10) + 1;
// 5 -> 20
Math.floor(Math.random() * 16) + 5;
// -10 -> (-2)
Math.floor(Math.random() * 9) - 10;
*/
}

function everyArray() {

    var everyCheck = Number(document.getElementById("everyCheck").value)
    console.log(typeof everyCheck)

    let everyArrayString = document.getElementById("everyArray").value
    let everyArray = [...everyArrayString]
    console.log(everyArray)

    let finaleveryResult = everyArray.every(everyCheckArray)
    console.log(finaleveryResult)

    function everyCheckArray(everyNumber){
        return everyNumber < everyCheck;
    }
    if (finaleveryResult == false) {
        let everyArrayResult = document.getElementById("everyArrayResult").innerHTML = (`The number is not bigger than the ones in the array: <strong>${finaleveryResult}</strong>`)
    }
    else {
        let everyArrayResult = document.getElementById("everyArrayResult").innerHTML = (`The number is bigger than the ones in the array: <strong>${finaleveryResult}</strong>`)
    }
}

function checkSalary(){

const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];

    let avarage = 0
    for(x=0;x<people.length;x++){
        avarage += Number(people[x].salary)
    console.log(avarage)
    console.log((avarage/people.length).toFixed(2))
    }
    document.querySelector("p.Checksalary").innerHTML = (`The average salary is: <strong>R$ ${(avarage/people.length).toFixed(2).replace('.',',')}</strong>`)
}

function checkAge() {
    const people = [
        { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
        { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
        { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
        { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
        { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
        { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
        { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
        { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
        { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
        { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
        { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
        { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
    ];
    let older30 = []
    for(x=0;x<people.length;x++){
    console.log(new Date(Date.parse(people[x].DOB)))
    let dataNasci = new Date(Date.parse(people[x].DOB))
    let birthYear = dataNasci.getFullYear()
    if (birthYear<1991){
        older30.push(people[x].firstName)
        console.log(older30)
    }
    }
    document.querySelector("p.Checkage").innerHTML = (`These people are older than <strong>30:</strong><br><strong>${older30}</strong>`)
}

function getNames(){
    
    const people = [
        { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
        { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
        { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
        { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
        { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
        { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
        { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
        { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
        { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
        { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
        { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
        { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
    ];
    let fullNames = []
    for(x=0;x<people.length;x++){
        let completeName = (`${people[x].firstName} ${people[x].lastName}`)
        console.log(completeName)
        fullNames.push(completeName)
    }
    document.querySelector("p.getName").innerHTML = (`<strong>${fullNames}</strong>`)
}

//Objetos podem ser ordenados de acordo com o valor de uma de suas propriedades.
function getList(){

const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];

let objectoPeople = {}
let objectoPersonPeople = {}
let yearArray = []

for (x=0;x<people.length;x++){
    let birthDay = new Date(Date.parse(people[x].DOB))
    let birthYearArray = birthDay.getFullYear()
    let nameOfPerson = people[x].firstName;
    objectoPeople[nameOfPerson] = birthYearArray
    objectoPersonPeople[nameOfPerson] = birthYearArray
    yearArray.push(objectoPersonPeople)
    objectoPersonPeople = {}
}
console.log(objectoPeople)
console.log(yearArray)

let idadesNasc = Object.entries(objectoPeople)
let finalIdadeNasc = idadesNasc.sort((a, b) => a[1] - b[1]);

console.log(finalIdadeNasc)
console.log(JSON.stringify(finalIdadeNasc))

document.getElementById("getList").innerHTML = (finalIdadeNasc)
document.getElementById("getListString").innerHTML = (JSON.stringify(finalIdadeNasc))
}

function countDep() {
    const people = [
        { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
        { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
        { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
        { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
        { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
        { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
        { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
        { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
        { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
        { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
        { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
        { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
    ];
    let Development = 0
    let Marketing = 0
    let Sales = 0
    let OfficeManagement = 0
    let finalDepartCountObject = {} 

    for (x=0;x<people.length;x++){
        if(people[x].department === 'Development'){
            Development += 1
        }
        else if(people[x].department === 'Marketing'){
            Marketing += 1
        }
        else if(people[x].department === 'Sales'){
            Sales += 1
        }
        else if(people[x].department === 'Office Management'){
            OfficeManagement += 1
        }
    }
    finalDepartCountObject["Development"] = Development
    finalDepartCountObject["Marketing"] = Marketing
    finalDepartCountObject["Sales"] = Sales
    finalDepartCountObject["Office Management"] = OfficeManagement
    console.log(Object.entries(finalDepartCountObject))
    document.getElementById("department").innerHTML = Object.entries(finalDepartCountObject)
}

function checkOrder() {
    const orders = [
        { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
            { productId: '123', price: 55 },
            { productId: '234', price: 30 },
        ]},
        { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
            { productId: '234', price: 30 },
        ]},
        { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
            { productId: '567', price: 30 },
            { productId: '678', price: 80 },
        ]},
        { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
            { productId: '789', price: 12 },
            { productId: '890', price: 90 },
        ]},
            { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
            { productId: '901', price: 43 },
            { productId: '123', price: 55 },
        ]},
    ];
    let ordersList = []
    for(x=0;x<orders.length;x++){
        if (orders[x].customerId == '234'){
            if (orders[x].delivered === false){
                ordersList.push(orders[x].orderId) 
            }
        }
    }
    console.log(ordersList)
    document.getElementById("checkOrder").innerHTML = (`This is the order number: ${ordersList}`)
}


function totalPrice(){
    const orders = [
        { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
            { productId: '123', price: 55 },
            { productId: '234', price: 30 }, // vai pegar este 30 aqui 
        ]},
        { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
            { productId: '234', price: 30 },
        ]},
        { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
            { productId: '567', price: 30 },
            { productId: '678', price: 80 },
        ]},
        { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
            { productId: '789', price: 12 },
            { productId: '890', price: 90 },
            { productId: '923', price: 85 },

        ]},
            { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
            { productId: '901', price: 43 },
            { productId: '123', price: 55 },
        ]},
    ];

    let totalsArray = []
    for(y=0;y<orders.length;y++){
        // total of each item 
        let totaItem = 0
        for(x=0;x<orders[y].items.length;x++){
            totaItem += orders[y].items[x].price
        }
        console.log(totaItem)
        //Abaixo esta adicionando no objeto dentro do array a propriedade "Total_Price" com o value "Number(totaItem)"
        orders[y].Total_Price = Number(totaItem)
        totalsArray.push(totaItem)
    }    
    console.log(totalsArray)
    console.log(orders)

    document.getElementById("totalPriceArray").innerHTML = (`This is the array with the total of each order: <strong>${totalsArray}</strong>`)
    document.getElementById("totalPriceOrder").innerHTML = (`This is the final orders with property total order added and calculated: <br>${JSON.stringify(orders)}`)
}



function haveThey(){
    const orders = [
    { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
        { productId: '123', price: 55 },
        { productId: '234', price: 30 }, // vai pegar este 30 aqui 
    ]},
    { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
        { productId: '234', price: 30 },
    ]},
    { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
        { productId: '567', price: 30 },
        { productId: '678', price: 80 },
    ]},
    { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '789', price: 12 },
        { productId: '890', price: 90 },
        { productId: '923', price: 85 },

    ]},
        { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '901', price: 43 },
        { productId: '123', price: 55 },
    ]},
];

let entregue = 0
let naoentregue = 0
for(x=0;x<orders.length;x++){
    console.log(orders[x].delivered)
    if(orders[x].delivered == true){
        entregue += 1
    } else {
        naoentregue += 1
    }
}
document.getElementById("entregue").innerHTML = (`O numero de ordens entregues foi de <strong>${entregue}</strong>`)
document.getElementById("naoentregue").innerHTML = (`O numero de ordens <strong>NÃO</strong> entregues foi de <strong>${naoentregue}</strong>`)

}


function orders123(){
    const orders = [
        { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
            { productId: '123', price: 55 },
            { productId: '234', price: 30 }, // vai pegar este 30 aqui 
        ]},
        { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
            { productId: '234', price: 30 },
        ]},
        { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
            { productId: '567', price: 30 },
            { productId: '678', price: 80 },
        ]},
        { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
            { productId: '789', price: 12 },
            { productId: '890', price: 90 },
            { productId: '923', price: 85 },
    
        ]},
            { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
            { productId: '901', price: 43 },
            { productId: '123', price: 55 },
        ]},
    ];

    let placed = 0
    for(x=0;x<orders.length;x++){
        if(orders[x].customerId === '123' && orders[x].items != 0){
        placed += 1
        }
    }
    if(placed >= 1){
    document.getElementById("123orders").innerHTML = (`<strong>Yes</strong>, he has placed orders!`)
    } else {
    document.getElementById("123orders").innerHTML = (`<strong>NO</strong>, he has not placed any orders!`)
    }
}



function productsSold(){
    const orders = [
        { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
            { productId: '123', price: 55 },
            { productId: '234', price: 30 }, // vai pegar este 30 aqui 
        ]},
        { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
            { productId: '234', price: 30 },
        ]},
        { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
            { productId: '567', price: 30 },
            { productId: '678', price: 80 },
        ]},
        { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
            { productId: '789', price: 12 },
            { productId: '890', price: 90 },
            { productId: '923', price: 85 },
    
        ]},
            { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
            { productId: '901', price: 43 },
            { productId: '123', price: 55 },
        ]},
    ];

    for(x=0;x<orders.length;x++){
        if (orders[x].delivered == true){
            for(y=0;y<orders[x].items.length;y++){
                if(orders[x].items[y].productId == "123"){
                    console.log(true)
                } else {
                    console.log(false)
                }
            } 
        }
    }

}