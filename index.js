console.log('Calculator')

let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'X') {
            buttonText = '*';
            screen.value += buttonText;
            screenValue = screen.value;
        }
        else if (buttonText == 'C') {
            screen.value = '';
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue); //Evaluates the mathematical expressions
        }
        else {
            screen.value += buttonText;
            screenValue = screen.value;
        }
    })
}


// To-Dos
// add trigo
// add backspace