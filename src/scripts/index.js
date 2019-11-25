import '../styles/index.scss';

const Counter = function() {
  let count = 0;

  this.increment = function () {
    count += 1;
    return count;
  };

  this.decrement = function () {
    count -= 1;
    return count;
  };

  this.getCount = function () {
    return count;
  };
};

const myCounter = new Counter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getCount());

const Calculator = function () {
  let result = 0;

  this.add = function(newValue) {
    return result += newValue;
  };
};

const myCalculator = new Calculator();
myCalculator.add();