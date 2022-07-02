
function linearSearch(){
    let arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10]
    let searchedNumber = Number(document.getElementById("searchedNumber").value)

    for(let x=0; x < arrayOfNumbers.length; x++){
        if(searchedNumber == arrayOfNumbers[x]){ 
            document.getElementById('Linearsearch').innerHTML = `The number searched was <strong>${searchedNumber}</strong>, and its index in the array is <strong>${arrayOfNumbers.indexOf(arrayOfNumbers[x])}</strong>`
        } 
    }
    for(x=0; x < arrayOfNumbers.length; x++){
        if(arrayOfNumbers.indexOf(searchedNumber) === -1){ 
            document.getElementById('Linearsearch').innerHTML = `The number searched was <strong>${searchedNumber}</strong>, and it is <strong>not</strong> in the array`
        } 
    }
}




