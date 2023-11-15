function animateElement(element, animationClass) {
    element.classList.add('animate__animated', animationClass);
    element.addEventListener('animationend', () => {
        element.classList.remove('animate__animated', animationClass);
    });
}

function modifyArray() {
    let myArray = [1, 2, 3, 4, 5];
    let modifiedArray = arrayOperations(myArray);
    let arrayResult = document.getElementById("arrayResult");
    arrayResult.innerText = "Модифікований масив: " + modifiedArray.join(", ");
    
    // Додамо анімацію для результату
    animateElement(arrayResult, "animate__heartBeat");
}

function arrayOperations(inputArray) {
    inputArray.push("end");
    inputArray.shift();
    inputArray.splice(3, 0, "middle");
    return inputArray;
}

function checkInteger() {
    let myNumber = 5;
    let result = checkIntegerFunction(myNumber);
    let numberResult = document.getElementById("numberResult");
    numberResult.innerText = result;
    
    // Додамо анімацію для результату
    animateElement(numberResult, "animate__heartBeat");
}

function checkIntegerFunction(number) {
    return Number.isInteger(number) ? "Число ціле" : "Число не ціле";
}