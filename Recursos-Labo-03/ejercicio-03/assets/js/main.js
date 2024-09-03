const calculateFactorial = (a) => {
    if (a < 0)
        return -1;
    else if (a == 0)
        return 1;
    else {
        return (a * calculateFactorial(a - 1));
    }
}

const requestaber = () => {
    let a = parseInt(prompt("Ingresa un numero", 0));
    alert(calculateFactorial(a));
}

const main = () => {
    requestaber();
}

main();
