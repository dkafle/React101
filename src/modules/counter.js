const counter = (function () {
  let count = 0;
  let increase = function () {
    return ++count;
  };
  let decrease = function () {
    return --count;
  };
  return {
    increase,
    decrease,
  };
})();


// export default counter;

const PI = 3.1415;

function sum(a, b) {
  return a + b;
};


export {
  counter as default,
  PI,
  sum,
};

