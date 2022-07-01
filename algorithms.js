

function linearSearch(){
    let arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10]
    let searchedNumber = document.getElementById("searchedNumber").value


    for(x=0; x<arrayOfNumbers.length;x++){
        if(searchedNumber == arrayOfNumbers[x]){
            document.getElementById('Linearsearch').innerHTML = `The number searched was <strong>${searchedNumber}</strong>, and its index in the array is <strong>${arrayOfNumbers.indexOf(arrayOfNumbers[x])}</strong>`
        } else {
            document.getElementById('Linearsearch').innerHTML = `The number searched was <strong>${searchedNumber}</strong>, and it is <strong>not</strong> in the array`

        }
    }
}