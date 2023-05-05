// Obter o peso e altura do usuário
var peso = prompt("Digite o seu peso em quilogramas:");
var altura = prompt("Digite a sua altura em metros:");

// Calcular o IMC
var imc = peso / (altura * altura);

// Arredondar o resultado para duas casas decimais
imc = imc.toFixed(2);

// Exibir o resultado para o usuário
alert("Seu IMC é: " + imc);