
const plus = (a, b) => {
    return a + b;
};
const subtract = (a, b) =>{
    return a - b;
} ;
const multiply = (a, b) =>{
    return a * b;
} ;
const split = (a, b) => {
    return a / b;
};
const requestNumber = () => {
    let a = parseInt(prompt("Ingresa un numero", 0));
    let b = parseInt(prompt("Ingresa otro numero", 0));
    selectOperation(a, b);
};

const selectOperation = (a, b) => {
    let option = parseInt(prompt("Ingrese una opcion: 1. Suma, 2. Resta, 3. Multiplicacion, 4. Division", 0));
    switch (option) {
        case 1:
            alert(plus(a, b));
            break;
        case 2: 
            alert(subtract(a, b));
            break;
        case 3:
            alert(multiply(a, b));
            break;
        case 4:
            alert(split(a, b));
            break;
        default:
            alert("opcion no valida");
            break;
    }
};

const main = () => {
    requestNumber();
}

main();
