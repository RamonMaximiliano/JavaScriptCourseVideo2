function calculartemperature(){
    let temperature1 = document.getElementById("firstselectbox").value
    let temperature2 = document.getElementById("secondselectbox").value
    let temepraturenumber = document.querySelector("input.temperatureconverter").value

    if (temperature1 == 1 && temperature2 ==2){
        let resultadotemperature3 = document.querySelector("p.insideelementsresult").innerHTML = (`A temperatura final é: ${(temepraturenumber *9/5) + 32}° Fahrenheit`)
    }
    else if (temperature1 == 2 && temperature2 ==1){
        let resultadotemperature3 = document.querySelector("p.insideelementsresult").innerHTML = (`A temperatura final é: ${(temepraturenumber - 32) * 5/9}° Celsius`)
    }
    else if (temperature1 == 1 && temperature2 ==1){
        let resultadotemperature3 = document.querySelector("p.insideelementsresult").innerHTML = (`A temperatura final é: ${temepraturenumber}° Celsius`)
    }
    else if (temperature1 == 2 && temperature2 ==2){
        let resultadotemperature3 = document.querySelector("p.insideelementsresult").innerHTML = (`A temperatura final é: ${temepraturenumber}° Fahrenheit`)
    }
}