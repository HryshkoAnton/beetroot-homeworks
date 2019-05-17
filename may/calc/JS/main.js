let resultObj = {};
let inputElement = document.getElementById('first');
let operations = document.getElementById('operations');
let MemoryCurrentNumber = 0;
let MemoryNewNumber = false;
let MemoryPendingOperation = '';
inputElement.innerText = '0';
operations.innerText = '0';



function maxLenNumbers() {
    if (inputElement.innerText.length > 13) {
        getPop();
    }
}

function clearAll() {
    resultObj = {}
    inputElement.innerText = '0';
    operations.innerText = '0';
}

function sum(x, y) {
    return x + y;
}

function difference(x, y) {
    return x - y;
}

function pow(x, y) {
    return x ** y;
}

function multiply(x, y) {
    return x * y;
}

function division(x, y) {
    if (y === 0) {
        alert('Error');
    } else {
        return x / y;
    }
}

function setAndClearFirst() {
    resultObj.firstValue = +inputElement.innerText;
    inputElement.innerText = '';
    
}

function setAndClearSecond() {
    resultObj.secondValue = +inputElement.innerText;
    inputElement.innerText = '';
    
}

function getSum() {
    setAndClearFirst()
    resultObj.resultFunc = sum;
    operations.innerText += '+'
}

function getDif() {
    setAndClearFirst();
    resultObj.resultFunc = difference;
    operations.innerText += '-'
}

function getPow() {
    setAndClearFirst()
    resultObj.resultFunc = pow;
    operations.innerText += '**'
}

function getMul() {
    setAndClearFirst();
    resultObj.resultFunc = multiply;
    operations.innerText += '*'
}

function getDiv() {
    setAndClearFirst();
    resultObj.resultFunc = division;
    operations.innerText += '/'
}


function getMinusPlus() {
  if ( inputElement.innerText.substr(0, 1) === '-' ) {
    inputElement.innerText = inputElement.innerText.substr(1);
    operations.innerText = inputElement.innerText.substr(1);
  } else {
    inputElement.innerText = '-' + inputElement.innerText;
    operations.innerText = inputElement.innerText;
  }
}


function getPercent() {
    inputElement.innerText /= 100;
    operations.innerText += '%' + inputElement.innerText;
}

function getOne() {
    if (inputElement.innerText === '0') {
        inputElement.innerText = '1';
        operations.innerText = '1';
    } else {
        inputElement.innerText += '1';
        operations.innerText += '1';
    }
    maxLenNumbers()
}

function getTwo() {
    if (inputElement.innerText === '0') {
        inputElement.innerText = '2';
        operations.innerText = '2';
    } else {
        inputElement.innerText += '2';
        operations.innerText += '2';
    }
    maxLenNumbers()
}

function getThree() {
    if (inputElement.innerText === '0') {
        inputElement.innerText = '3';
        operations.innerText = '3';
    } else {
        inputElement.innerText += '3';
        operations.innerText += '3';
    }
    maxLenNumbers()
}

function getFour() {
    if (inputElement.innerText === '0') {
        inputElement.innerText = '4';
        operations.innerText = '4';
    } else {
        inputElement.innerText += '4';
        operations.innerText += '4';
    }
    maxLenNumbers()
}

function getFive() {
    if (inputElement.innerText === '0') {
        inputElement.innerText = '5';
        operations.innerText = '5';
    } else {
        inputElement.innerText += '5';
        operations.innerText += '5';
    }
    maxLenNumbers()
}

function getSix() {
    if (inputElement.innerText === '0') {
        inputElement.innerText = '6';
        operations.innerText = '6';
    } else {
        inputElement.innerText += '6';
        operations.innerText += '6';
    }
    maxLenNumbers()
}

function getSeven() {
    if (inputElement.innerText === '0') {
        inputElement.innerText = '7';
        operations.innerText = '7';
    } else {
        inputElement.innerText += '7';
        operations.innerText += '7';
    }
    maxLenNumbers()
}

function getEight() {
    if (inputElement.innerText === '0') {
        inputElement.innerText = '8';
        operations.innerText = '8';
    } else {
        inputElement.innerText += '8';
        operations.innerText += '8';
    }
    maxLenNumbers()
}

function getNine() {
    if (inputElement.innerText === '0') {
        inputElement.innerText = '9';
        operations.innerText = '9';
    } else {
        inputElement.innerText += '9';
        operations.innerText += '9';
    }
    maxLenNumbers()
}

function getZero() {
    if (inputElement.innerText === '0') {
        inputElement.innerText = '0';
        operations.innerText = '0';
    } else {
        inputElement.innerText += '0';
        operations.innerText += '0';
    }
    maxLenNumbers()
}



function getDot() {
    if ( inputElement.innerText.indexOf('.') === -1) {
        inputElement.innerText += '.';
        operations.innerText +='.';
    } 
}

function getPop() {
    if (inputElement.innerText === '0' || inputElement.innerText.length == 1) {
        inputElement.innerText = '0';
        operations.innerText = '0';
    } else {
        inputElement.innerText = inputElement.innerText.substring(0, inputElement.innerText.length - 1);
        operations.innerText = operations.innerText.substring(0, operations.innerText.length - 1);
    }
    
}


function getResult()  {
    resultObj.secondValue = +inputElement.innerText;
    writeResult();
    operations.innerText += '=' + inputElement.innerText;

}

function writeResult() {
    let result = resultObj.resultFunc(resultObj.firstValue, resultObj.secondValue);
    inputElement.innerText = result;
}