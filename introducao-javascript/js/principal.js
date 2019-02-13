var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if(peso <= 0 || peso >= 1000) {
	console.log("Peso Inválido!");
	pesoEhValido = false;
	tdImc.textContent = "Peso Inválido!";
}
if (altura <= 0 || altura >= 3.00) {
	console.log("Altura Inválido!");
	alturaEhValida = false;
	tdImc.textContent = "Altura Inválido!";
}
if (alturaEhValida && pesoEhValido) {
	var imc = peso / (altura*altura);
	tdImc.textContent = imc;
}
var imc = peso / (altura * altura); // 100 / 2.0 X 2.0  = 100 / 4 =>>>> 25

tdImc.textContent = imc;