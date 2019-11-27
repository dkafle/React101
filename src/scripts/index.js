import '../styles/index.scss';

// Array literal
const fruits = ['Apple', 'Mango', 'Oranges'];
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const luckyNumbers = [7, 3, 5, 9, 11, 20, 75, 101, 51, 50];
const newLuckyNumbers = [330, 273];
const allLuckyNumbers = [...newLuckyNumbers, ...luckyNumbers];
console.log(allLuckyNumbers);

const myFavFruit = 'Orange';

// Iterating over array wtih bor loop
// For loop can be broken in certain condition
const badFruit = 'Banana';
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === badFruit) {
        console.log('Found a bad fruit. Leaving this loop');
        break;
    }
    console.log(fruits[i], i);
}

// Higher Order Function (HOF)
// It is better to iterate over an array this way
fruits.forEach(function(item, index) {
    console.log(item, index);
});

// map is a HOF that takes another function, calls it against each item in the array and returns array
const doubledLuckyNumbers = luckyNumbers.map(num => num * 2);
console.log(doubledLuckyNumbers);

// Filter returns array of item that match the condition
const smallerLuckyNumbers = luckyNumbers.filter(num => num > 50);
console.log(smallerLuckyNumbers);


//Returns a array of items that match the condition
const result = words.filter(word => word.length > 6);

//Finds a word in array and returns, if found
const foundWord = words.find(word => word === 'elite');
if (foundWord) {
    console.log('the word is in the array');
} else {
    console.log('Not there!');
}


//Splice changes the content of original array, it removes an item from the array and returns it
const deletedItem = fruits.splice(1,2);
console.log(deletedItem);
fruits.reverse();

//Insert an item after position 1 in fruits array
fruits.splice(1, 0, 'Pineapple');

//Replaces one item aftr position 3 with Grapefruit
fruits.splice(3, 1, 'Grapefruit');
