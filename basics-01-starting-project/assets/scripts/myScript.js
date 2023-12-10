let currentValue = 0;

const store = [];

const objectHolder = {};

function totalValue(intialNumber, opertor, userEnter) {
    const getSummaryValue = intialNumber + opertor + userEnter;
    outputResult(currentValue, getSummaryValue);
    return getSummaryValue;
}

function userEnteredvalue() {
    return parseInt(userInput.value)
}

function holder(intialNumber, opertor, userEnter, result) {

    const objectHolder = {

        intialNumber: intialNumber,
        opertor: opertor,
        userEnter: userEnter,
        result: result
    };

    store.push(objectHolder);
    console.log(store);
}

function calculate(opertor) {
    let element = userEnteredvalue();
    if (isNaN(element)) {
        alert("Please enter valid number");
        return;
    }
    let intialValue = currentValue;
    let mathoperator;
    if (opertor != "ADD" && opertor != "SUBTRACT" && opertor != "MULTIPLY" && opertor != "DIVIDE" || element == 0) {
        return;
    }
    // AND = ALLTHE CONDITION MUST BE TRUE
    // OR ANY ONE CONDITION IS TRUE 
    if (opertor === "ADD") {
        currentValue = currentValue + element;
        mathoperator = "+";
    } else if (opertor === "SUBTRACT") {
        currentValue = currentValue - element;
        mathoperator = "-";
    } else if (opertor === "DIVIDE") {
        currentValue = currentValue / element;
        mathoperator = "/";
    } else if (opertor === "MULTIPLY") {
        currentValue = currentValue * element;
        mathoperator = "*";
    }

    totalValue(intialValue, mathoperator, element);
    holder(intialValue, opertor, element, currentValue);
}

addBtn.addEventListener("click", calculate.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculate.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click", calculate.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculate.bind(this, "DIVIDE"));