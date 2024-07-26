function calcular() {
    const primerApuesta = parseFloat(document.getElementById('primerApuesta').value);
    const cuotaPrimeraCasa = parseFloat(document.getElementById('cuotaPrimeraCasa').value);
    const cuotaSegundaCasa = parseFloat(document.getElementById('cuotaSegundaCasa').value);

    if (!isNaN(primerApuesta) && !isNaN(cuotaPrimeraCasa)) {
        const valorPagado = primerApuesta * cuotaPrimeraCasa;
        document.getElementById('valorPagadoPrimeraCasa').value = valorPagado.toFixed(2);

        const cuotaMinimaSegundaCasa = encontrarCuotaMinima(cuotaPrimeraCasa);
        document.getElementById('cuotaMinimaSegundaCasa').value = cuotaMinimaSegundaCasa.toFixed(2);
        
        if (!isNaN(cuotaSegundaCasa)) {
            const valorSegundaApuesta = valorPagado / cuotaSegundaCasa;
            document.getElementById('valorSegundaApuesta').value = valorSegundaApuesta.toFixed(2);
        }
    }
}

function encontrarCuotaMinima(cuotaPrimeraCasa) {
    // Tabla basada en la imagen proporcionada
    const cuotas = {
        2.00: 2.11, 1.99: 2.12, 1.98: 2.13, 1.97: 2.14, 1.96: 2.15, 1.95: 2.16, 1.94: 2.17, 1.93: 2.18, 1.92: 2.19, 1.91: 2.20,
        1.90: 2.21, 1.89: 2.22, 1.88: 2.23, 1.87: 2.24, 1.86: 2.25, 1.85: 2.26, 1.84: 2.27, 1.83: 2.28, 1.82: 2.29, 1.81: 2.30,
        1.80: 2.36, 1.79: 2.37, 1.78: 2.38, 1.77: 2.39, 1.76: 2.40, 1.75: 2.41, 1.74: 2.42, 1.73: 2.43, 1.72: 2.44, 1.71: 2.45,
        1.70: 2.50, 1.69: 2.51, 1.68: 2.52, 1.67: 2.53, 1.66: 2.54, 1.65: 2.55, 1.64: 2.56, 1.63: 2.57, 1.62: 2.58, 1.61: 2.59,
        1.60: 2.78, 1.59: 2.79, 1.58: 2.80, 1.57: 2.81, 1.56: 2.82, 1.55: 2.83, 1.54: 2.84, 1.53: 2.85, 1.52: 2.86, 1.51: 2.87,
        1.50: 3.10, 1.49: 3.11, 1.48: 3.12, 1.47: 3.13, 1.46: 3.14, 1.45: 3.15, 1.44: 3.16, 1.43: 3.17, 1.42: 3.18, 1.41: 3.19,
        1.40: 3.61, 1.39: 3.62, 1.38: 3.63, 1.37: 3.64, 1.36: 3.65, 1.35: 3.66, 1.34: 3.67, 1.33: 3.68, 1.32: 3.69, 1.31: 3.70,
        1.30: 4.05, 1.29: 4.06, 1.28: 4.07, 1.27: 4.08, 1.26: 4.09, 1.25: 4.10, 1.24: 4.11, 1.23: 4.12, 1.22: 4.13, 1.21: 4.14,
        1.20: 6.11, 1.19: 6.12, 1.18: 6.13, 1.17: 6.14, 1.16: 6.15, 1.15: 6.16, 1.14: 6.17, 1.13: 6.18, 1.12: 6.19, 1.11: 6.20,
        1.10: 10.10
    };

    // Buscar la cuota mínima más cercana en la segunda casa
    for (let cuota in cuotas) {
        if (cuotaPrimeraCasa >= parseFloat(cuota)) {
            return cuotas[cuota];
        }
    }

    // Si no se encuentra una coincidencia exacta, devolver un valor predeterminado
    return 1.0; // Ajustar según sea necesario
}

function llenarApuesta(valor) {
    document.getElementById('primerApuesta').value = valor;
    calcular();
}

function ajustarCuota(incremento) {
    const cuotaSegundaCasaInput = document.getElementById('cuotaSegundaCasa');
    let cuotaSegundaCasa = parseFloat(cuotaSegundaCasaInput.value);
    
    if (isNaN(cuotaSegundaCasa)) {
        cuotaSegundaCasa = 0;
    }

    cuotaSegundaCasa += incremento;
    cuotaSegundaCasaInput.value = cuotaSegundaCasa.toFixed(2);

    calcular();
}
