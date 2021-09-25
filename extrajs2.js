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