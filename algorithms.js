
function linearSearch() {
    let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let biggerArrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20]

    let searchedNumber = Number(document.getElementById("searchedNumber").value)

    for (let x = 0; x < arrayOfNumbers.length; x++) {
        if (searchedNumber == arrayOfNumbers[x]) {
            document.getElementById('Linearsearch').innerHTML = `The number searched was <strong>${searchedNumber}</strong>, and its index in the array is <strong>${arrayOfNumbers.indexOf(arrayOfNumbers[x])}</strong>`
        }
    }
    for (x = 0; x < arrayOfNumbers.length; x++) {
        if (arrayOfNumbers.indexOf(searchedNumber) === -1) {
            document.getElementById('Linearsearch').innerHTML = `The number searched was <strong>${searchedNumber}</strong>, and it is <strong>not</strong> in the array`
        }
    }
}

function binarySearch() {
    let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let biggerArrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20]
    let searchedNumber = Number(document.getElementById("binarysearchedNumber").value)

    let left = 0
    let right = arrayOfNumbers.length -1;
    let attempt = 0 
   
    while(left <= right){
        attempt += 1
        let middle = left + Math.floor((right - left) / 2);
        if(arrayOfNumbers[middle] == searchedNumber){
            return document.getElementById("binarySearch").innerHTML = `Found it with ${attempt} attempt`
        } else if (searchedNumber < arrayOfNumbers[middle]){
            right  = middle -1
        } else {
            left = middle +1
        }
    }
    return document.getElementById("binarySearch").innerHTML = 'Not found'
}
