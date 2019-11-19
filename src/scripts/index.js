import '../styles/index.scss';

// Data Types:
// Number
// String
// Object
// Boolean

let count = 0;

const incButton = document.querySelector('#increment');
const decButton = document.querySelector('#decrement') ;
const reult = document.querySelector('#result');

incButton.onclick = function() {
    count += 1;
    result.innerText = count;
};

decButton.onclick = () => {
    count -= 1;
    result.innerText = count;
};
