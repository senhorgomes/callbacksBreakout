//Map
const numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];
const numbersIncreased = [];
for(let i = 0; i < numbers.length; i ++){
  numbersIncreased.push(numbers[i] * 2)
}


// const numbersMapped = numbers.map((element, index, array) => element);
const numbersMapped = numbers.forEach((element) => {
  return element * 2
});
console.log(numbersMapped)



