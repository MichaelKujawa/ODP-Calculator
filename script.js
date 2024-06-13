const display = document.getElementById('display');
const btnSum = document.getElementById('btn-sum');
const btnDel = document.getElementById('delete');

const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');
const btn6 = document.getElementById('btn-6');
const btn7 = document.getElementById('btn-7');
const btn8 = document.getElementById('btn-8');
const btn9 = document.getElementById('btn-9');
const btn0 = document.getElementById('btn-0');

const btnAdd = document.getElementById('btn-add');
const btnSub = document.getElementById('btn-sub');
const btnMul = document.getElementById('btn-mul');
const btnDiv = document.getElementById('btn-div');

const btnDec = document.getElementById('btn-dec');

const btnClr = document.getElementById('clear');



function appendToDisplay(num) {
    display.textContent += num;
}

btn0.addEventListener('click', () => {
    appendToDisplay('0');
})


btn1.addEventListener('click', function() {
    appendToDisplay('1');
});

btn2.addEventListener('click', function() {
    appendToDisplay('2');
});

btn3.addEventListener('click', function() {
    appendToDisplay('3');
});

btn4.addEventListener('click', function() {
    appendToDisplay('4');
});

btn5.addEventListener('click', function() {
    appendToDisplay('5');
});

btn6.addEventListener('click', function() {
    appendToDisplay('6');
});

btn7.addEventListener('click', function() {
    appendToDisplay('7');
});

btn8.addEventListener('click', function() {
    appendToDisplay('8');
});

btn9.addEventListener('click', function() {
    appendToDisplay('9');
});

btnAdd.addEventListener('click', function() {
    appendToDisplay('+');
});

btnSub.addEventListener('click', function() {
    appendToDisplay('-');
});

btnMul.addEventListener('click', function() {
    appendToDisplay('*');
});

btnDiv.addEventListener('click', function() {
    appendToDisplay('/');
});



btnClr.addEventListener('click', function() {
    clearDisplay();
});

btnDel.addEventListener('click', function() {
    deleteLastCharacter();
});

function clearDisplay() {
    display.textContent = '';
}

btnDec.addEventListener('click', ( ) => {
    let value = display.textContent

    if(!value.includes('.')){
        value += '.'
    }

    display.textContent = value;
})

function deleteLastCharacter() {
    display.textContent = display.textContent.slice(0, -1);
}

function add_spaces(expression){
    expression = expression.replace(/(\+|\-|\*|\/)/g, ' $1 ');
    return expression;
}

function split(expression){
    let components = expression.split(/\s+/);
    components = components.filter(component => component.trim() !== '');

    return components;
}

function result(){
    let expression = display.textContent;
    spacedExpression = add_spaces(expression);
    let list = split(spacedExpression);
    let evaluate= evaluateExpression(list);
    return(evaluate);
}

btnSum.addEventListener('click', () => {
    let sum = result()
    clearDisplay();
    display.textContent = sum;
})

function evaluateExpression(components) {
    let result = 0;
    let currentOperator = '+';
    let currentOperand = 0;

    for (let i = 0; i < components.length; i++) {
        let component = components[i];

        if (['+', '-', '*', '/'].includes(component)) {
            currentOperator = component;
        } else {
            let operand = parseFloat(component);

            switch (currentOperator) {
                case '+':
                    result += currentOperand;
                    currentOperand = operand;
                    break;
                case '-':
                    result += currentOperand;
                    currentOperand = -operand;
                    break;
                case '*':
                    currentOperand *= operand;
                    break;
                case '/':
                    currentOperand /= operand;
                    break;
            }
        }
    }

    result += currentOperand;

    return result;
}

