// 1 Write a function that takes two parameters, an array of numbers and a target number. The function should return a pair of numbers from the array that adds up to the target number. If no such pair is found, the function should return null.

let array = [2, 7, 11, 15];
let target = 13;
let pair = findPair(array, target);

function findPair(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] == target) {
        return [array[i], array[j]];
      }
    }
  }
}
console.log(pair);

//2 Write a function that takes a string as input and returns the reverse of the string.

function reverseString(str) {
  return str.split("").reverse().join(" ");
}
console.log(reverseString("Technology"));

//3 Write a function that takes an array of numbers as input and returns the sum of the two largest numbers in the array.
const number = [1, 2, 3, 4, 5, 6, 7, 8, , 10];
const sum = sumof2(number);
function sumof2(atv) {
  atv.sort(function (a, b) {
    return b - a;
  });
  return atv[1] + atv[0];
}
console.log(sum);

//5 Write a function that takes an array of numbers as input and returns a new array that contains only the even numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = EvenNumbers(numbers);

function EvenNumbers(arr) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}
console.log(evenNumbers);
