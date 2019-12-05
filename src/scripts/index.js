import '../styles/index.scss';

// Premitive data types
// let fullName = 'Deepak K';
let age = 0;
let address = '';
let hasGraduated = false;
let hobby;
let x = undefined;
let fruits = ['apple'];
let person = {
    fname: 'Deepak',
    lname: 'Kafle'
};
let f = () => { }

let personHasProps = Object.keys(person).length > 0;
console.log(
    personHasProps
);

// console.log(
//     typeof f
// );


/*
// Truithness
let goodGuy = fruits.length > 0 || hasGraduated;
if (goodGuy) {
    console.log('The peson has graduaged with some fruits');
} else {
    console.log('go buy some fruits');
}

if (hasFruits) {
    console.log('congrats!');
} else {
    console.log('');
}
*/
