let MostrarValor = ' ';
let OperacionActual = null;
let PrimeraOperacion = null;

function BotonNro(Nro) {
    MostrarValor += Nro;
    ActualizarDisplay(MostrarValor);
}

function PonerOperacion(Operacion) {
    if (OperacionActual !== null) {
        CalcularOperacion();
    }
    PrimeraOperacion = parseFloat(MostrarValor);
    OperacionActual = Operacion;
    MostrarValor = ' ';
}

function CalcularOperacion() {
    if (OperacionActual === null || MostrarValor === ' ') return;
    const SegundaOperacion = parseFloat(MostrarValor);
    switch (OperacionActual) {
        case '+': MostrarValor = (PrimeraOperacion + SegundaOperacion).toString();
            break;
        case '-': MostrarValor = (PrimeraOperacion - SegundaOperacion).toString();
            break;
        case '*': MostrarValor = (PrimeraOperacion * SegundaOperacion).toString();
            break;
        case '/': MostrarValor = (PrimeraOperacion / SegundaOperacion).toString();
            break;
    }
    ActualizarDisplay(MostrarValor);
    OperacionActual = null;
}

function LimpearDispley() {
    MostrarValor = ' ';
    OperacionActual = null;
    PrimeraOperacion = null;
    ActualizarDisplay(MostrarValor);
}

function ActualizarDisplay(Valor) {
    document.getElementById('CalculadoraDisplay').value = Valor;
}

function EliminarValor() {
    MostrarValor = MostrarValor.slice(0, -1);
    ActualizarDisplay(MostrarValor);
}

function BotonSigno() {
    if (!MostrarValor.includes('.')) {
        MostrarValor += '.';
        ActualizarDisplay(MostrarValor);
    }
}





