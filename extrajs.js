
/*100 exercise*/

function hundreadnumber() {

    console.log("Hello world!")
    let number1001 = document.getElementById("100number1").value
    let number1002 = document.getElementById("100number2").value

    if (number1001 == 100 && number1002 != 100) {
        document.querySelector("p.button100").innerHTML = (`The <strong>first</strong> number is: ${number1001}`)
    }
    else if (number1002 == 100 && number1001 != 100) {
        document.querySelector("p.button100").innerHTML = (`The <strong>second</strong> number is: ${number1002}`)
    }
    else if (number1002 == 100 && number1001 == 100) {
        document.querySelector("p.button100").innerHTML = (`They are both 100`)
    }
    else if (Number(number1001) + Number(number1002) == 100) {
        document.querySelector("p.button100").innerHTML = (`The <strong>sum</strong> of them is 100!`)
    }
}

/*100 exercise*/



/*File extension reader*/

function fileextensionname() {
    let originalFileName = document.querySelector("input.fileextensionname").value
    /*slice corta a string e o "last index of" esta dizendo para o slice onde cortar*/
    console.log(originalFileName.slice(originalFileName.lastIndexOf(".")))
    let extensionfinmal = originalFileName.slice(originalFileName.lastIndexOf("."))
    let fileextensionnameResult = document.querySelector("p.fileextensionnameResult").innerHTML = (`The extension is: <strong>${extensionfinmal}</strong>`)
}
/*My original solution*/
/*
    function fileextensionname(){
        let originalFileName = document.querySelector("input.fileextensionname").value
        let originalFileNameArray = [...originalFileName]
        console.log(originalFileNameArray)
        let fileextension = [originalFileNameArray[originalFileNameArray.length-3]]
        fileextension.push(originalFileNameArray[originalFileNameArray.length-2])
        fileextension.push(originalFileNameArray[originalFileNameArray.length-1])
        console.log(fileextension)
        console.log(fileextension.join(''))
        let fileextensionnameResult = document.querySelector("p.fileextensionnameResult").innerHTML = (`The extension is: <strong>${fileextension.join('')}</strong>`)
    }
*/
/*File extension reader*/


/*Next alpha*/
function nextAlpha() {
    let stringAlpha = document.querySelector("input.nextalpha").value
    let stringAlpha2 = [...stringAlpha]
    console.log(stringAlpha2)

    let stringAlpha3 = ("a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z")
    let alphabet = stringAlpha3.split(',')
    console.log(alphabet)
    console.log(alphabet.indexOf('g'))
    let finalAlpha = []
    console.log(finalAlpha)

    for (x = 0; x < stringAlpha2.length; x++) {
        let indexcharacter = alphabet.indexOf(stringAlpha2[x])
        console.log(indexcharacter)
        finalAlpha.push(alphabet[indexcharacter + 1])
    }
    console.log(finalAlpha)
    let finalAlphabet = finalAlpha.join('')
    document.querySelector("p.finalalpha").innerHTML = (`This is the string plus one letter for each in the Alphabet <strong>${finalAlphabet}</strong>`)
}

/*Next alpha*/

/*Show me the date*/

function showMeTheDate() {
    let currentdate = new Date()
    let date = currentdate.getDate()
    let month = currentdate.getMonth() + 1
    let year = currentdate.getFullYear()
    document.querySelector("p.whatdate").innerHTML = (`Today is <strong>${date + "/" + month + "/" + year}</strong>!`)

    let date2 = currentdate.getDay()
    let month2 = currentdate.getMonth() + 1
    console.log(`${date2} and ${month2}`)
    switch (date2) {
        case 0:
            date2 = "Sunday";
            break;
        case 1:
            date2 = "Monday";
            break;
        case 2:
            date2 = "Tuesday";
            break;
        case 3:
            date2 = "Wednesday";
            break;
        case 4:
            date2 = "Thursday";
            break;
        case 5:
            date2 = "Friday";
            break;
        case 6:
            date2 = "Saturday";
    }
    console.log(`${date2} and ${month2}`)


    switch (month2) {
        case 1:
            month2 = "January";
            break;
        case 2:
            month2 = "February";
            break;
        case 3:
            month2 = "March";
            break;
        case 4:
            month2 = "April";
            break;
        case 5:
            month2 = "May";
            break;
        case 6:
            month2 = "June";
            break;
        case 7:
            month2 = "July";
            break;
        case 8:
            month2 = "August";
            break;
        case 9:
            month2 = "September";
            break;
        case 10:
            month2 = "October";
            break;
        case 11:
            month2 = "November";
            break;
        case 12:
            month2 = "December";
            break;
    }
    console.log(`${date2} and ${month2}`)
    document.querySelector("p.whatdate2").innerHTML = (`Today is <strong>${date2}, ${date} of ${month2} from ${year} </strong>!`)
}

//Write the above but with written days of the week and months

/*Show me the date*/

function newString() {

    let newstring = document.getElementById("newString").value
    console.log(newstring)
    let newstringarray = []
    let newstringDefault = "New!"
    newstringarray.push(newstring[0], newstring[1], newstring[2], newstring[3])
    console.log(newstringarray)
    let newstringarrayString = newstringarray.join('')
    console.log(newstringarrayString)

    if (newstringarrayString === newstringDefault) {
        console.log("Yes")
        let newStringResult = document.querySelector("p.newString").innerHTML = (newstring + " Já tinha <strong>New!</strong>")
    } else {
        let newStringResult = document.querySelector("p.newString").innerHTML = ("New! " + newstring + " Eu adicionei <strong>New!</strong> na frente da frase!")
    }
}

function countLetter() {
    let quantityString = document.getElementById("characString").value
    let characterLookUp = document.getElementById("characLetter").value
    let countString = 0
    let quantityArray = [...quantityString]
    for (xString = 0; xString < quantityArray.length; xString++) {
        if (characterLookUp == quantityArray[xString]) {
            countString += 1
        }
    }
    document.querySelector("p.characString").innerHTML = (`The letter <strong>${characterLookUp}</strong> appears <strong>${countString}</strong> times in the given string!`)
    console.log(`The letter <strong>${characterLookUp}</strong> appears <strong>${countString}</strong> times in the given string!`)
}

/*Re fazer o exercicio acima porém com o método filter*/

function countLetter2(){
    let quantityString2 = document.getElementById("characString2").value
    let characterLookUp2 = document.getElementById("characLetter2").value
    let quantityArray2 = [...quantityString2]
    console.log(quantityArray2)

}
    /*
    let counting = quantityArray2.filter(checkLetter)
    function checkLetter(letteranalysis){
        
        if (letteranalysis == characterLookUp2){
            count += 1
        }
        console.log(count)
        return count
    }
    document.querySelector("p.characString2").innerHTML = (`The letter <strong>${characterLookUp2}</strong> appears <strong>${counting}</strong> times in the given string!`)

}
*/

