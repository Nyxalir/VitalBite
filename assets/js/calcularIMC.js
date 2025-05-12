function calcularIMC() {
    const peso = parseFloat(document.getElementById("weight").value);
    const altura = parseFloat(document.getElementById("height").value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) return;

    const imc = peso / (altura * altura);
    const imcRedondeado = imc.toFixed(1);
    const imcValor = document.querySelector(".imc-number");
    const indicador = document.querySelector(".imc-indicator");

    let categoria = "";
    let posicion = 0;

    if (imc < 18.5) {
        categoria = "Bajo peso";
        posicion = 10;
    } else if (imc < 25) {
        categoria = "Normal";
        posicion = 35;
    } else if (imc < 30) {
        categoria = "Sobrepeso";
        posicion = 60;
    } else {
        categoria = "Obeso";
        posicion = 85;
    }

    imcValor.textContent = imcRedondeado;
    indicador.textContent = categoria;
    indicador.style.left = `${posicion}%`;
}

// Escucha cambios en los inputs
document.getElementById("weight").addEventListener("input", calcularIMC);
document.getElementById("height").addEventListener("input", calcularIMC);

// Llamada inicial si hay valores prellenados
calcularIMC();
