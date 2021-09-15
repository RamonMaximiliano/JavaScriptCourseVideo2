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

