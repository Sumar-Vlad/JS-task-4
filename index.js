'use strict'

//1. Задача на розворот числа:

const currentMaxValue = 4589;
let reverseMaxValue;

reverseMaxValue = Number(Array.from(String(currentMaxValue)).reverse().join(''));

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'


//2. Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності:

const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

productOfArray = resultsArray.flat(Infinity).reduce(
    (prev, current) => {
        return prev * current;
    }
);

console.log(productOfArray); // 24