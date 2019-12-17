import '../styles/index.scss';

/* Closure */

/* Age Checker */
function ageChecker() {
  const smokingMinAge = 18;
  const drinkingMinAge = 21;
  return function (age) {
    if (age < smokingMinAge) {
      return 'Invalid for smoking or drinking';
    } else if (age < drinkingMinAge) {
      return 'Valid ONLY for smoking';
    } else {
      return 'Valid for both';
    }
  };
}

const customerAgeCheck = ageChecker();
console.log(customerAgeCheck(20));

/* Adding Functions */

function adder(x) {
  return function (y) {
    return x + y;
  };
}

const addBy1 = adder(1);
const addBy5 = adder(5);

let a = addBy1(100);

console.log(a);



function outer() {
  var counter = 0;
  return function() {
    return counter += 1;
  };
}

const tracker = outer();

let y = tracker();
console.log(y);

let p = tracker();
console.log(p);

let q = tracker();
console.log(q);


function outer1(x, y) {
  var z = x + y;
  function inner(a) {
    var k = z * a;
    console.log(k);
  };
  var k = inner(40);
  console.log(k);
}

outer1(20, 30);
