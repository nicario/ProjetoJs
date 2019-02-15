function obtemPacienteDoFormulario(form) {
	
	var paciente = {
	nome: form.nome.value;
	peso: form.peso.value;
	altura: form.altura.value;
	gordura: form.gordura.value;
	imc: calculaImc(form.altura.value, form.peso.value);
	}
}