/** 
 * primera recomendación debes crear las variables con el estandar 
 * camelCase para nombrar tus variables y funciones
 * 
 * @example
 * 
 * @var miVariableEjemplo
 * @function miFuncionEjemplo()
 * 
 * segunda recomendación debes usar nombres en ingles para tus variables y funciones
 * 
 * @example
 * 
 * @var myExampleVariable
 * @function myExampleFunction()
 * 
 * tercera recomendación debes usar nombres descriptivos para tus variables y funciones
 * en ingles
 * 
 * @example
 * 
 * @var myDescriptiveVariable
 * @function myDescriptiveFunction()
 * 
 * cuarta recomendación debes agregar comentarios a tus funciones y variables
 * para describir su funcionalidad
 * 
 * @example
 * // hacer los comentario en español explicando la funcionalidad
 * 
 * // Esta variable almacena el valor actual que se mostrará en la calculadora
 * @var MostrarValor
 * // Esta variable almacena la operación actual que se está realizando
 * @var OperacionActual
 * // Esta variable almacena el resultado de la primera operación
 * @var PrimeraOperacion
 * 
 * 
 * ### Te falto validar que cuando se divida por cero no lo permita y muestre un mensaje de error ###
 * 
 * 
 * Y bueno por lo de mas todo esta bien estructurado de forma funcional y respetas que cada función
 * tenga una sola responsabilidad y eso es bueno.
 * 
 * Tambien muy buena logica de programacón.
 * 
 * 
 * Tarea: Realiza las correcciones sugeridas en el código. 
 * 1 - Cambia los nombres de las variables y funciones al estandar camelCase.
 * 2 - Usa nombres en ingles para las variables y funciones.
 * 3 - Usa nombres descriptivos para las variables y funciones.
 * 4 - Agrega comentarios en español explicando la funcionalidad de las variables y funciones.
 * 5 - Agrega la validación para evitar la división por cero.
 * 6 - Permite agregar con el teclado numerico del computador los números y operaciones.
 *  detecta esos eventos del teclado con .addEventListener('keydown', function(event) { ... });
 * 
 * Nueva tarea: 
 * Agrega la tasa del BCV (Banco Central de Venezuela) para convertir bolívares a dólares
 * y viceversa. Crea dos botones en el HTML para realizar estas conversiones.
 *  
*/





let ValueDisplay = '';
let CurrentOperation = null;
let FirstOperand = null;      

function ButtonNumber(Num) {
    ValueDisplay += Num;
    UpdateDisplay(ValueDisplay);
}

function Operation(Op) {
    if (CurrentOperation !== null) {
        CalculateOperation();
}
    FirstOperand = parseFloat(ValueDisplay);
    CurrentOperation = Op;
    ValueDisplay = '';
}

function CalculateOperation() {
    if (CurrentOperation === null || ValueDisplay === '') return;
    const SecondOperand = parseFloat(ValueDisplay);
    switch (CurrentOperation) {
        case '+': 
        ValueDisplay = (FirstOperand + SecondOperand).toString();  
            break;
        case '-': 
        ValueDisplay = (FirstOperand - SecondOperand).toString();
            break;
        case '*': 
        ValueDisplay = (FirstOperand * SecondOperand).toString();
            break;
        case '/': 
        if (SecondOperand === 0) {
            ValueDisplay = 'Error: Division by zero';
        }   else {
            ValueDisplay = (FirstOperand / SecondOperand).toString();
        }
            break;
    }
    UpdateDisplay(ValueDisplay);
    CurrentOperation = null;
}

function ClearDisplay() {
    ValueDisplay = '';
    CurrentOperation = null;
    FirstOperand = null;
    UpdateDisplay();
}

function UpdateDisplay(Value) {
    document.getElementById('DisplayCalculadora').value = ValueDisplay;
}

function ClearValue() {
    ValueDisplay = ValueDisplay.slice(0, -1);
    UpdateDisplay(ValueDisplay);
}

function ButtonSign() {
    if (!ValueDisplay.includes('.')) {
        ValueDisplay += '.';
        UpdateDisplay(ValueDisplay);
    }   
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key)) {
        ButtonNumber(key);
    } else if (key === '+') {
        Operation('+');
    } else if (key === '-') {
        Operation('-');
    } else if (key === '*') {
        Operation('*');
    }           
    else if (key === '/') {
        Operation('/');
    } else if (key === 'Enter') {
        CalculateOperation();
    } else if (key === 'Backspace') {
        ClearValue();
    } else if (key === '.') {
        ButtonSign();
    }
});




    