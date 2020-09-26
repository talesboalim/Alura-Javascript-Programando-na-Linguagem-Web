var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");
for (x = 0; x < pacientes.length; x++) {
    var peso = pacientes[x].querySelector(".info-peso").textContent;
    var altura = pacientes[x].querySelector(".info-altura").textContent;
    var imc = pacientes[x].querySelector(".info-imc");

    if (peso <= 0 || peso >= 400) {
        imc.textContent = "Peso inválido!";
        imc.classList.add("imc-incorreto");
    } else if (altura <= 0 || altura >= 3) {
        imc.textContent = "Altura inválida!";
        imc.classList.add("imc-incorreto");
    } else {
        imc.textContent = (peso / (altura * altura)).toFixed(2);
    }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(document.querySelector("#form-adiciona"));

    var tabela = document.querySelector("#tabela-pacientes");

    var pacienteTr = document.createElement("tr");
    var nome = document.createElement("td");
    nome.textContent = document.querySelector("#form-adiciona").nome.value;
    pacienteTr.appendChild(nome);
    var peso = document.createElement("td");
    peso.textContent = document.querySelector("#form-adiciona").peso.value;
    pacienteTr.appendChild(peso);
    var altura = document.createElement("td");
    altura.textContent = document.querySelector("#form-adiciona").altura.value;
    pacienteTr.appendChild(altura);
    var gordura = document.createElement("td");
    gordura.textContent = document.querySelector("#form-adiciona").gordura.value;
    pacienteTr.appendChild(gordura);
    var imc = document.createElement("td");
    imc.textContent = "1";//document.querySelector("#form-adiciona").imc.value;
    pacienteTr.appendChild(imc);

    tabela.appendChild(pacienteTr);
});

