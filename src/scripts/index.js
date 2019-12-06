import '../styles/index.scss';
// import counter, { PI, sum } from './counter';
import * as foo from '../modules/counter';
import weekDays from '../modules/lib';

// let myCount = counter.increase();
// console.log(myCount);
console.log(foo.PI);
console.log(foo.sum(100, 500));
console.log(weekDays.getDayInitial(0));
