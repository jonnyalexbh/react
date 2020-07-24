const arrayTest = [1, 2, 3, 4];

// arrayTest.push(1);
// arrayTest.push(2);
// arrayTest.push(3);
// arrayTest.push(4);

let arrayTest2 = [...arrayTest, 5];
const arrayTest3 = arrayTest2.map(number => number * 2);

console.log(arrayTest);
console.log(arrayTest2);
console.log(arrayTest3);
