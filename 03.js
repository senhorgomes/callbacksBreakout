//Filter out odd numbers

const numbers = [1, "pizza", 3, 4, "elephant", 7, 10, 14, "strings", 18, 1];

// for(let i = 0; i < numbers.length; i ++){
//   if (typeof numbers[i] === 'number'){
//     numbersFiltered.push(numbers[i])
//   }
// }
const numbersFiltered = numbers.filter((element, index, array) => index > 3 || typeof element === 'number');

console.log(numbersFiltered)
