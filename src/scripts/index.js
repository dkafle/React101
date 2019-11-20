import '../styles/index.scss';

// Data Types:
// Number
// String
// Object
// Boolean

// DOM

let count = 1;

const MAX = 20;
const MIN = 1;

const incButton = document.querySelector('#increment');
const decButton = document.querySelector('#decrement') ;
const reult = document.querySelector('#result');

incButton.onclick = function() {
    if (count < MAX) {
        count += 1;
    }
    result.innerText = count;
};

// ES6 Arrow Function
decButton.onclick = () => {
    if (count > MIN) {
        count -= 1;
    }
    result.innerText = count;
};
