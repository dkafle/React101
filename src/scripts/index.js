import '../styles/index.scss';

const Point = function(x, y) {
  this.x = x;
  this.y = y;
};

const Line = function(start, end) {
  this.start = start;
  this.end = end;
};

Point.prototype.showPosition = function () {
  return 'My position is: (' + this.x + ', ' + this.y + ')';
};

Line.prototype.drawLine = function() {
  console.log('im drawing line with ', this.start, this.end);
};

const p = new Point(10,50);
const q = new Point(150, 300);

const longLine = new Line(q, p);
longLine.drawLine();

console.log(longLine.hasOwnProperty('start'));
console.log(longLine.hasOwnProperty('end'));
console.log(longLine.hasOwnProperty('drawLine'));

console.log(p.hasOwnProperty('x'));
console.log(p.hasOwnProperty('y'));
console.log(p.hasOwnProperty('showPosition'));
