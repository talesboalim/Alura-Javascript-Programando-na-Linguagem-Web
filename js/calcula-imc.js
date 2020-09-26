


var pacientes = document.querySelectorAll(".paciente");
for (x = 0; x < pacientes.length; x++) {
    var peso = pacientes[x].querySelector(".info-peso").textContent;
    var altura = pacientes[x].querySelector(".info-altura").textContent;
    var tdImc = pacientes[x].querySelector(".info-imc");

    var alturaEhValida = validaAltura(altura);
    var pesoEhValido = validaPeso(peso);
    // Alteração
    if (!pesoEhValido) {
        tdImc.textContent = "Peso inválido!";
        tdImc.classList.add("imc-incorreto");
    }

    if (!alturaEhValida) {
        tdImc.textContent = "Altura inválida!";
        tdImc.classList.add("imc-incorreto");
    }
    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
    /*
    if (peso <= 0 || peso >= 400) {
    imc.textContent = "Peso inválido!";
    imc.classList.add("imc-incorreto");
    } else if (altura <= 0 || altura >= 3) {
    imc.textContent = "Altura inválida!";
    imc.classList.add("imc-incorreto");
    } else {
    imc.textContent = calculaImc(peso, altura);
    }
    */
}

function calculaImc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

function validaPeso(peso) {
    if (peso > 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}
function validaAltura(altura) {
    if (altura > 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}