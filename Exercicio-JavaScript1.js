/*
Nesse desafio, é preciso solicitar ao usuário que ele insira "dois números"
e, a partir disso, calcular:

- A soma dos dois números;
- A subtração dos dois números;
- A multiplicação dos dois números;
- A divisão dos dois números;
- O resto da divisão dos dois números.

Realizar ainda:

- Se a soma dos dois números é par (ou ímpar);
- Se os dois números inseridos são iguais (ou diferentes)
*/

let numberOne = prompt("Digite o primeiro número");
let numberTwo = prompt("Digite o segundo número");
alert("A soma dos dois números é: " + (Number(numberOne) + Number(numberTwo)))
alert("A subtração dos dois números é: " + (Number(numberOne) - Number(numberTwo)))
alert("A multiplicação dos dois números é: " + (Number(numberOne) * Number(numberTwo)))
alert("A divisão dos dois números é: " + (Number(numberOne) / Number(numberTwo)))
alert("O resto da divisão dos dois números é: " + (Number(numberOne) % Number(numberTwo)))

if ((Number(numberOne) + Number(numberTwo)) % 2 === 0) {
  alert("a soma dos dois números é par")
}
else {
  alert("A soma dos dois números é ímpar")
}

if (numberOne === numberTwo) {
  alert("Os dois números inseridos são iguais")
}
else {
  alert("Os dois números inseridos são diferentes")
}
