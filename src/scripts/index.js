import '../styles/index.scss';

console.log('webpack starterkit');

// Functions

// Functions are Objects

// Function are First Class Citizens

const foo = cb => {
  console.log('I am inside foo');
  cb();
}

const bar = function () {
  console.log('Surprise!');
}

const fullname = (f, l = 'Sharma') => `${f} ${l}`;

const square = x => x * x;

foo(bar);

console.log(fullname('Ramesh', 'Rocks'));
console.log(square(2))
