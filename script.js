//exemplo 1
// let n1 = Number(prompt('Digite n1'));
// let n2 = Number(prompt('Digite n2'));
// let media = (n1 + n2) / 2;
// alert('Média:' + media.toFixed(2));

// if (media < 5) {
//   alert('Reprovado');
// } else {
//   alert('Aprovado');
// }


// exercicio 1
// let number = Number(prompt("Digite um numero:"))
// alert(`${number+1} e ${number-1}`)

// exercicio 2
// let totalBill = Number(prompt("Qual o valor R$?"))
// let howManyPeople = parseInt(prompt("Quantas pessoas?"))
// let priceForEachPerson = totalBill/ howManyPeople
// alert(`R$ ${priceForEachPerson.toFixed(2)}`)

// exercicio 3
// let price = parseFloat(prompt("Qual o preço?"))
// alert(`A Vista R$ ${(price-price*0.1).toFixed(2)} ou 3x de R$ ${(price/3).toFixed(2)}`)

// exercicio 4
// let monthNumber = parseInt(prompt("Digite o numero referente ao mês(1-13):"))
// const arr = ["Janeiro", "Fevereiro", "Março", 
//             "Abril", "Maio", "Junho", 
//             "Julho", "Agosto", "Setembro",
//             "Outubro", "Novembro", "Dezembro"]

// if(monthNumber >= 1 && monthNumber <= 12){
//     for(var i = 0; i < arr.length; i++){
//         if(i+1 == monthNumber){
//             alert(arr[i])
//         }
//     }
// }else{
//     alert("Mês Inválido")
// }

// exercicio 5
// let positive
// do{
//     positive = parseInt(prompt("Digite o numero positivo"))
// }
// while(positive>=0)
// alert("ERROR: NUMERO NEGATIVO DIGITADO")

// exercicio 6
// let val1 = parseFloat(prompt("DIgite o primeiro valor:")) 
// let val2 = parseFloat(prompt("DIgite o segundo valor:")) 
// let val3 = parseFloat(prompt("DIgite o terceiro valor:"))
// let result = val1 + val2 + val3
// if(result > 80){
//     alert(result)
// }else{
//     alert("Valor inválido")
// }

// exercicio 7
// let char = prompt("Digite uma letra:").toUpperCase()
// if(char == 'F'){
//     alert("Feminino")
// }else if(char == 'M'){
//     alert("Masculino")
// }