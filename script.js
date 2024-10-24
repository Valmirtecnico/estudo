let n1 = Number(prompt('Digite n1'));
let n2 = Number(prompt('Digite n2'));
let media = (n1 + n2) / 2;
alert('Média:' + media.toFixed(2));

if (media < 5) {
  alert('Reprovado');
} else {
  alert('Aprovado');
}