
function linearSearch() {
    let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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
    let searchedNumber = Number(document.getElementById("binarysearchedNumber").value)
    let middle = [arrayOfNumbers.length / 2]
    let right = arrayOfNumbers.splice(middle)
    let left = arrayOfNumbers

    if (searchedNumber < right[0] && searchedNumber >= left[0]) {
        while (searchedNumber != left[0] && searchedNumber < right[0]) {
            middle = Math.floor(left.length / 2)
            right = left.splice(middle)
            left = left
            document.getElementById("binarySearch").innerHTML = 'The number was on the left side'
        }
        if(searchedNumber == left[0]) {
            document.getElementById("binarySearch").innerHTML = 'The number was on the left side'
        }
    } else if (searchedNumber >= right[0] && searchedNumber <= right[right.length-1]) {
        while (searchedNumber != left[0] && searchedNumber < right[0]) {
            middle = Math.floor(left.length / 2)
            right = left.splice(middle)
            left = left
            console.log(middle)
            console.log(right)
            console.log(left)
        }
        document.getElementById("binarySearch").innerHTML = 'The number was on the right side'
    } else {
        document.getElementById("binarySearch").innerHTML = 'The number was not on the list'
    }
}


/* find the index of the number, otherwise you are just saying which side it is */