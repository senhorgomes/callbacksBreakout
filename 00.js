//What is a callback?
//What is a higher order function?

//A math expression within another math expression
1 + 1
2 + 2 + 1
6 + 4


2 + 2 - (2 + 2) + 1

const arrayOfNumbers = [1, 2, 3, 4, 5]

// arrayOfNumbers.forEach(element => console.log(element))

const multiplication = (number) => {
  return number * 2;
}
const addition = (number) => {
  return number + 2;
}
const subtraction = (number) => {
  return number - 2;
}
const division = (number) => {
  return number / 2;
}


const mathArrayFunction = (array, callback) => {
  for (const element of array) {
    console.log(callback(element))
  }
}

mathArrayFunction(arrayOfNumbers, subtraction)




