
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
    /*In the filter method, the parameter is another function, and it will return the return of the function, the parameter of the second function analyses each item of the original array*/
    let finalHigher = quantityArray2.filter(higherNumber)
    function  higherNumber(hN){
        return hN > characterLookUp2
    }
    console.log(finalHigher)
    document.querySelector("p.characString2").innerHTML = (`These are the numbers <strong>${finalHigher}</strong> higher than <strong>${characterLookUp2}</strong>  from the original string provided <strong>${quantityString2}</strong> `)
    /*below looking for the even numbers in the string, same as the above, another function is necessary*/
    let finalEven = quantityArray2.filter(evenNumbers)
    function evenNumbers(evenNumber){
        return evenNumber %2 == 0 
    }
    document.querySelector("p.evenString2").innerHTML = (`These are the <strong>even</strong> numbers <strong>${finalEven}</strong> from the original string provided <strong>${quantityString2}</strong>`)
}

/*Array in ascending order*/

function ascendArrray(){
    let originalArrray = document.querySelector("input.ascendArrray").value
    let originalascendArrray = [...originalArrray]
    console.log(originalascendArrray)
    let ascendedArray = []
    for (arr=0;arr<originalascendArrray.length;arr++){
        ascendedArray.push(originalascendArrray[arr])
    }
    ascendedArray.sort()
    console.log(ascendedArray)
    console.log(originalascendArrray)
    /* método abaixo JSON.stringify converte somente no back-end os arrays em strings.
    porque não da pra comparar 2 arrays em JS*/
    if (JSON.stringify(ascendedArray) === JSON.stringify(originalascendArrray)){
         document.querySelector("p.ascendArrray").innerHTML = (`<strong>True</strong>, o array esta em ordem ascendente`)
    } else {
        document.querySelector("p.ascendArrray").innerHTML = (`<strong>False</strong>, o array não esta em ordem ascendente`)
    }
    console.log(Math.max(...ascendedArray))
    console.log(Math.min(...ascendedArray))
    document.querySelector("p.maxdArrray").innerHTML = (`This is the <strong>highest</strong> number <strong>${Math.max(...ascendedArray)}</strong>`)
    document.querySelector("p.mindArrray").innerHTML = (`This is the <strong>lowest</strong> number <strong>${Math.min(...ascendedArray)}</strong>`)
}

/*Array in ascending order Update*/

function replaceArray(){
    let replacethis = document.querySelector("input.replaceString").value
    console.log(replacethis.replace(/[0-9]/,'$'))
    //o replace só substitui o primeiro character
    let replaceResult = document.querySelector("p.replaceString").innerHTML= (`This is the final string replaced the first digit by $, <strong>${replacethis.replace(/[0-9]/,'$')}</strong>`)
    // o método abaixo substitui todos os characters
    let replaceAllResult = document.querySelector("p.replaceAllString").innerHTML= (`This is the final string replaced all digits by $, <strong>${replacethis.split(/[0-9]/).join('$')}</strong>`)
}


/*compare object properties*/
function compareObjects () {
    let firstObject = document.getElementById("object1Select").value
    console.log(firstObject)

    let secondObject = document.getElementById("object2Select").value
    console.log(secondObject)

    switch (firstObject) {
        case 'Car 1':
            var myfirstObject = {
                color:"white",
                brand:"ford",
                Year:"1995"
            }
            console.log(myfirstObject)
        break
        case 'Car 2':
            var myfirstObject = {
                color:"red",
                brand:"huyndai",
                Year:"2000"
            }
            console.log(myfirstObject)
        break
        case 'Animal':
            var myfirstObject = {
                race:"dog",
                age:"10",
                weight:"20"
            }
            console.log(myfirstObject)
        break

    }

    switch (secondObject) {
        case 'Car 1':
            var mysecondObject = {
                color:"white",
                brand:"ford",
                Year:"1995"
            }
            console.log(mysecondObject)
        break
        case 'Car 2':
            var mysecondObject = {
                color:"red",
                brand:"huyndai",
                Year:"2000"
            }
            console.log(mysecondObject)
        break
        case 'Animal':
            var mysecondObject = {
                race:"dog",
                age:"10",
                weight:"20"
            }
            console.log(mysecondObject)
        break

    }

    if(Object.keys(myfirstObject)[0] == Object.keys(mysecondObject)[0] 
    &&
    Object.keys(myfirstObject)[1] == Object.keys(mysecondObject)[1] 
    &&
    Object.keys(myfirstObject)[2] == Object.keys(mysecondObject)[2] 
    )
    {
        let fonalObjectResult = document.getElementById("objectClass").innerHTML = (`The objects have the <strong>same properties</strong>`)
        let fonalObjectResult1 = document.getElementById("objectClass1").innerHTML = (`The is the first object <strong>${JSON.stringify(myfirstObject)}</strong>`)
        let fonalObjectResult2 = document.getElementById("objectClass2").innerHTML = (`The is the second object <strong>${JSON.stringify(mysecondObject)}</strong>`)

    } else {
        let fonalObjectResult = document.getElementById("objectClass").innerHTML = (`The objects are <strong>different</strong>`) 
        let fonalObjectResult1 = document.getElementById("objectClass1").innerHTML = (`The is the first object <strong>${JSON.stringify(myfirstObject)}</strong>`)
        let fonalObjectResult2 = document.getElementById("objectClass2").innerHTML = (`The is the second object <strong>${JSON.stringify(mysecondObject)}</strong>`)
      }
}
/*compare object properties*/
