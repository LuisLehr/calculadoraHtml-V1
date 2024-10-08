const calculadora = {
    valorDisplay: '0',
    primeiroOperando: null,
    esperandoSegundoOperando: false,
    operador: null,
};

function inserirDigito(digito) {
    const { valorDisplay, esperandoSegundoOperando } = calculadora;

    if (esperandoSegundoOperando === true) {
        calculadora.valorDisplay = digito;
        calculadora.esperandoSegundoOperando = false;
    } else {
        calculadora.valorDisplay = valorDisplay === '0' ? digito : valorDisplay + digito;
    }
}

function inserirDecimal(ponto) {
    if (calculadora.esperandoSegundoOperando === true) {
        calculadora.valorDisplay = '0.';
        calculadora.esperandoSegundoOperando = false;
        return;
    }

    if (!calculadora.valorDisplay.includes(ponto)) {
        calculadora.valorDisplay += ponto;
    }
}

function lidarComOperador(proximoOperador) {
    const { primeiroOperando, valorDisplay, operador } = calculadora;
    const valorEntrada = parseFloat(valorDisplay);

    if (operador && calculadora.esperandoSegundoOperando) {
        calculadora.operador = proximoOperador;
        return;
    }

    if (primeiroOperando == null && !isNaN(valorEntrada)) {
        calculadora.primeiroOperando = valorEntrada;
    } else if (operador) {
        let expressao = `${primeiroOperando} ${operador} ${valorEntrada}`;
        
        // Se o operador for %, subtrai
        if (proximoOperador === '%') {
            const resultado = primeiroOperando - (primeiroOperando * (valorEntrada / 100));
            calculadora.valorDisplay = String(resultado);
            calculadora.primeiroOperando = resultado;
            return;
        }

        const resultado = realizarCalculo[operador](primeiroOperando, valorEntrada);
        calculadora.valorDisplay = String(resultado);
        calculadora.primeiroOperando = resultado;
    }

    calculadora.esperandoSegundoOperando = true;
    calculadora.operador = proximoOperador;
}

const realizarCalculo = {
    '/': (primeiroOperando, segundoOperando) => primeiroOperando / segundoOperando,
    '*': (primeiroOperando, segundoOperando) => primeiroOperando * segundoOperando,
    '+': (primeiroOperando, segundoOperando) => primeiroOperando + segundoOperando,
    '-': (primeiroOperando, segundoOperando) => primeiroOperando - segundoOperando,
    '=': (primeiroOperando, segundoOperando) => segundoOperando,
};

function resetarCalculadora() {
    calculadora.valorDisplay = '0';
    calculadora.primeiroOperando = null;
    calculadora.esperandoSegundoOperando = false;
    calculadora.operador = null;
}

function deletarUltimoDigito() {
    const { valorDisplay } = calculadora;
    if (valorDisplay.length === 1) {
        calculadora.valorDisplay = '0';
    } else {
        calculadora.valorDisplay = valorDisplay.slice(0, -1);
    }
}

function atualizarDisplay() {
    const display = document.querySelector('.calculadora-screen');
    display.value = calculadora.valorDisplay;
}

atualizarDisplay();

const teclas = document.querySelector('.botoes');
teclas.addEventListener('click', (evento) => {
    const { target } = evento;
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operador')) {
        lidarComOperador(target.value);
        atualizarDisplay();
        return;
    }

    if (target.classList.contains('virgula')) {
        inserirDecimal(target.value);
        atualizarDisplay();
        return;
    }

    if (target.classList.contains('limpar')) {
        resetarCalculadora();
        atualizarDisplay();
        return;
    }

    if (target.classList.contains('delete')) {
        deletarUltimoDigito();
        atualizarDisplay();
        return;
    }

    inserirDigito(target.value);
    atualizarDisplay();
});
