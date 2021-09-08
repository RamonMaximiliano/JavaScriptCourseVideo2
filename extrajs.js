
/*100 exercise*/

function hundreadnumber(){

    console.log("Hello world!")
        let number1001 = document.getElementById("100number1").value
        let number1002 = document.getElementById("100number2").value
       
    if (number1001 == 100 && number1002 != 100) {
        document.querySelector("p.button100").innerHTML = (`The <strong>first</strong> number is: ${number1001}`)
    }
    else if  (number1002 == 100 && number1001 != 100) {
        document.querySelector("p.button100").innerHTML = (`The <strong>second</strong> number is: ${number1002}`)
    }
    else if  (number1002 == 100 && number1001 == 100) {
        document.querySelector("p.button100").innerHTML = (`They are both 100`)
    }
    else if  (Number(number1001) + Number(number1002) == 100) {
        document.querySelector("p.button100").innerHTML = (`The <strong>sum</strong> of them is 100!`)
    }
}

/*100 exercise*/



/*File extension reader*/

function fileextensionname(){
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

