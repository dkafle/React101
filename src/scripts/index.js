import '../styles/index.scss';

// console.log('webpack starterkit');

const fname = 'Ramesh';
const lname = 'Shrestha';

//const fullName = fname + ' ' + lname;
const fullName = `${fname} ${lname}`;

console.log(fullName);
console.log(fullName.charAt(3));
console.log(fullName.lastIndexOf('e'));
console.log(fullName.substring(0));
// console.log(fullName[3]);
// console.log(fullName.length);

// let i = 0;
// while (i < fullName.length) {
//   console.log(fullName[i]);
//   i++;
// }

const l = 'This is a very long string';
const url = 'https://www.google.com/?q=Nepal';
const s = url.split('/');
console.log(s[2]);

