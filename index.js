'use strict'

//1. Задача на розворот числа:

const currentMaxValue = 4589;
let reverseMaxValue;

const arrayOfValue = Array.from(String(currentMaxValue));
const back = arrayOfValue.reverse();
reverseMaxValue = back.join('');
reverseMaxValue = Number(reverseMaxValue);

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'


//2. Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:

const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

const flatMatrix = resultsArray.flat(Infinity);

productOfArray = flatMatrix.reduce(
    (prev, current) => {
        return prev * current;
    }
);

console.log(productOfArray); // 24