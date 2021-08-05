window.onload = mesgastos(), receitas()

function mesgastos(){
    let mesgastos = new Date()
    let mesatualgastos = mesgastos.getMonth()
    let mes1 = 'Janeiro'
    let mes2 = 'Fevereiro'
    let mes3 = 'Março'
    let mes4 = 'Abril'
    let mes5 = 'Maio'
    let mes6 = 'Junho'
    let mes7 = 'Julio'
    let mes8 = 'Agosto'
    let mes9 = 'Setembro'
    let mes10 = 'Outubro'
    let mes11 = 'Novembro'
    let mes12 = 'Dezembro'
    
    switch (mesatualgastos) {
        case 0:
            document.getElementById("receitasgastos").innerHTML = (`Receitas do mês de ${mes1}`)
            document.getElementById("gastosgastos").innerHTML = (`Gastos do mês de ${mes1}`)
            break
        case 1:
            document.getElementById("receitasgastos").innerHTML = (`Receitas do mês de ${mes2}`)
            document.getElementById("gastosgastos").innerHTML = (`Gastos do mês de ${mes2}`)
            break
        case 2:
            document.getElementById("receitasgastos").innerHTML = (`Receitas do mês de ${mes3}`)
            document.getElementById("gastosgastos").innerHTML = (`Gastos do mês de ${mes3}`)

            break
        case 3:
            document.getElementById("receitasgastos").innerHTML = (`Receitas do mês de ${mes4}`)
            document.getElementById("gastosgastos").innerHTML = (`Gastos do mês de ${mes4}`)

            break
        case 4:
            document.getElementById("receitasgastos").innerHTML = (`Receitas do mês de ${mes5}`)
            document.getElementById("gastosgastos").innerHTML = (`Gastos do mês de ${mes5}`)

            break
        case 5:
            document.getElementById("receitasgastos").innerHTML = (`Receitas do mês de ${mes6}`)
            document.getElementById("gastosgastos").innerHTML = (`Gastos do mês de ${mes6}`)

            break
        case 6:
            document.getElementById("receitasgastos").innerHTML = (`Receitas do mês de ${mes7}`)
            document.getElementById("gastosgastos").innerHTML = (`Gastos do mês de ${mes7}`)

            break
        case 7:
            document.getElementById("receitasgastos").innerHTML = (`Receitas do mês de ${mes8}`)
            document.getElementById("gastosgastos").innerHTML = (`Gastos do mês de ${mes8}`)

            break
        case 8:
            document.getElementById("receitasgastos").innerHTML = (`Receitas do mês de ${mes9}`)
            document.getElementById("gastosgastos").innerHTML = (`Gastos do mês de ${mes9}`)

            break
        case 9:
            document.getElementById("receitasgastos").innerHTML = (`Receitas do mês de ${mes10}`)
            document.getElementById("gastosgastos").innerHTML = (`Gastos do mês de ${mes10}`)

            break
        case 10:
            document.getElementById("receitasgastos").innerHTML = (`Receitas do mês de ${mes11}`)
            document.getElementById("gastosgastos").innerHTML = (`Gastos do mês de ${mes11}`)

            break
        default:
            document.getElementById("receitasgastos").innerHTML = (`Receitas do mês de ${mes12}`)
            document.getElementById("gastosgastos").innerHTML = (`Gastos do mês de ${mes12}`)

            break
    }
}


function receitas(){
    let receitas = []
    let receita1 = Number(document.getElementById("receita1").value)
    receitas.push(receita1)
    let receita2 = Number(document.getElementById("receita2").value)
    receitas.push(receita2)
    let receita3 = Number(document.getElementById("receita3").value)
    receitas.push(receita3)
    let receita4 = Number(document.getElementById("receita4").value)
    receitas.push(receita4)
    let receita5 = Number(document.getElementById("receita5").value)
    receitas.push(receita5)

    /*For especial de arrays abaixo somando todos os items*/
    /*Ao contrário do for normal a variavel position vai retornar o valor do item do array*/
    let valor = 0
    for (let position of receitas){
        valor += position
        let totalreceitas = document.getElementById("totalreceitas").innerHTML = (`A soma das receitas é: <strong>${valor}</strong>`)
    }
}

