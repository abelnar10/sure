function calcular() {
    const primerApuesta = parseFloat(document.getElementById('primerApuesta').value.replace(',', '.'));
    const cuotaPrimeraCasa = parseFloat(document.getElementById('cuotaPrimeraCasa').value.replace(',', '.'));
    const cuotaSegundaCasa = parseFloat(document.getElementById('cuotaSegundaCasa').value.replace(',', '.'));

    if (!isNaN(primerApuesta) && !isNaN(cuotaPrimeraCasa)) {
        const valorPagado = primerApuesta * cuotaPrimeraCasa;
        document.getElementById('valorPagadoPrimeraCasa').value = valorPagado.toFixed(2);

        if (!isNaN(cuotaSegundaCasa)) {
            const valorSegundaApuesta = valorPagado / cuotaSegundaCasa;
            const pagoSegundaCasa = valorSegundaApuesta * cuotaSegundaCasa;
            const ganancia = pagoSegundaCasa - valorSegundaApuesta;

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

function ajustarCuota(incremento) {
    const cuotaSegundaCasaInput = document.getElementById('cuotaSegundaCasa');
    let cuotaSegundaCasa = parseFloat(cuotaSegundaCasaInput.value.replace(',', '.'));

    if (isNaN(cuotaSegundaCasa)) {
        cuotaSegundaCasa = 0;
    }

    cuotaSegundaCasa += incremento;
    cuotaSegundaCasaInput.value = cuotaSegundaCasa.toFixed(2).replace('.', ',');

    calcular();
}

document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(',', '.');
        calcular();
    });
});
