function calcular() {
    const primerApuesta = parseFloat(document.getElementById('primerApuesta').value);
    const cuotaPrimeraCasa = parseFloat(document.getElementById('cuotaPrimeraCasa').value);
    const cuotaSegundaCasa = parseFloat(document.getElementById('cuotaSegundaCasa').value);

    if (!isNaN(primerApuesta) && !isNaN(cuotaPrimeraCasa)) {
        const valorPagado = primerApuesta * cuotaPrimeraCasa;
        document.getElementById('valorPagadoPrimeraCasa').value = valorPagado.toFixed(2);

        if (!isNaN(cuotaSegundaCasa)) {
            const valorSegundaApuesta = valorPagado / cuotaSegundaCasa;
            const pagoSegundaCasa = valorSegundaApuesta * cuotaSegundaCasa;
            const ganancia = pagoSegundaCasa - valorSegundaApuesta ;

            document.getElementById('valorSegundaApuesta').value = valorSegundaApuesta.toFixed(2);
            document.getElementById('pagoSegundaCasa').value = pagoSegundaCasa.toFixed(2);
            document.getElementById('ganancia').value = ganancia.toFixed(2);

            const gananciaElement = document.getElementById('ganancia');
            if (ganancia < primerApuesta) {
                gananciaElement.style.color = 'red';
            } else if (ganancia >= primerApuesta && ganancia <= (primerApuesta + 3000)) {
                gananciaElement.style.color = 'yellow';
            } else {
                gananciaElement.style.color = 'green';
            }
        }
    }
}

function llenarApuesta(valor) {
    document.getElementById('primerApuesta').value = valor;
    calcular();
}

function ajustarCuota(id, incremento) {
    const cuotaInput = document.getElementById(id);
    let cuota = parseFloat(cuotaInput.value);

    if (isNaN(cuota)) {
        cuota = 0;
    }

    cuota = Math.max(0, cuota + incremento);
    cuotaInput.value = cuota.toFixed(2);

    // Llamamos a la función calcular cada vez que ajustamos la cuota
    calcular();
}
