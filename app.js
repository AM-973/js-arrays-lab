console.log('--------------------------------------');
const foods = [];  
console.log('Exercise 1 result:', foods);
console.log('--------------------------------------');
foods.push('pizza', 'cheeseburger');
console.log('Exercise 2 result:', foods);
console.log('--------------------------------------');
foods.unshift('taco');
console.log('Exercise 3 result:', foods);
console.log('--------------------------------------');
const favFood= foods[1];
console.log('Exercise 4 result:', favFood);
console.log('--------------------------------------');
foods.splice(2,0, "tofu");
console.log('Exercise 5 result:', foods);
console.log('--------------------------------------');
foods.splice(1,1, "sushi", "cupcake");
console.log('Exercise 6 result:', foods);
console.log('--------------------------------------');
const yummy= foods.slice(1, 3,);
console.log('Exercise 7 result:', yummy);
console.log('--------------------------------------');
const soyIdx= foods.indexOf('tofu');
console.log('Exercise 8 result:', soyIdx);
console.log('--------------------------------------');
const allFoods= foods.join(' -> ');
console.log('Exercise 9 result:', allFoods);
console.log('--------------------------------------');
const hasSoup = foods.includes('soup');
console.log('Exercise 10 result:', hasSoup);
console.log('--------------------------------------');
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds =[];
nums.forEach((number) => {
    if (number % 2 !== 0) {
        odds.push(number);
    }
});
console.log('Exercise 11 result:', odds);
console.log('--------------------------------------');
const fizz = [];
const buzz = [];
const fizzbuzz = [];
nums.forEach((number) => {
    if (number % 15 === 0) {
        fizzbuzz.push(number);
    }
    if (number % 3 === 0){
        fizz.push(number);
    }
    if (number % 5 === 0){
        buzz.push(number);
    }
});
console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);
console.log('--------------------------------------');
const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
const numList = numArrays[numArrays.length - 1];
console.log('Exercise 13 result:', numList);
console.log('--------------------------------------');
const num = numArrays[2][1];
console.log('Exercise 14 result:', num);
console.log('--------------------------------------');
let total = 0;
for (const inner of numArrays) {
    for (const value of inner) {
        total += value;
    }
}
console.log('Exercise 15 result:\n', total);
