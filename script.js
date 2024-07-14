function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, introduce valores válidos para altura y peso.';
    } else if (altura > 1.9 && peso > 901.9) {
        document.getElementById('resultado').innerText = 'Usted es un anormal y un lechón listo para la parrilla.';
    } else if (altura > 1.9 && peso < 50) {
        document.getElementById('resultado').innerText = 'Usted es un anormal y una lagrima.';
    } else if (altura < 1.4 && peso > 90) {
        document.getElementById('resultado').innerText = 'Usted es un enano y un lechón listo para la parrilla.';
    } else if (altura < 1.4 && peso < 50) {
        document.getElementById('resultado').innerText = 'Usted es un enano y una lagrima.';
    } else if (altura > 2) {
        document.getElementById('resultado').innerText = 'Usted es un anormal.';
    } else if (altura < 1.4) {
        document.getElementById('resultado').innerText = 'Usted es un enano.';
    } else if (peso > 90) {
        document.getElementById('resultado').innerText = 'Usted es un lechón listo para la parrilla.';
    } else if (peso < 50) {
        document.getElementById('resultado').innerText = 'Usted es una lagrima.';
    } else {
        const imc = peso / (altura * altura);
        document.getElementById('resultado').innerText = `Tu IMC es ${imc.toFixed(2)}`;
    }
}

