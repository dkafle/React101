import '../styles/index.scss';

console.log('webpack starterkit');

// Functions

// Functions are Objects

// Function are First Class Citizens

// callback
const foo = cb => {
  console.log('I am inside foo');
  cb();
};

const bar = function () {
  console.log('Surprise!');
};

foo(bar);

// Default parameter
const fullname = (f, l = 'Sharma') => `${f} ${l}`;
console.log(fullname('Ramesh', 'Rocks'));

// Arrow Function automatically returns a value
const square = x => x * x;

console.log(square(2));
