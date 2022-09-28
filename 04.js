//Questions?
const arrayWithObjects = [
  {
    "string": {key: 0},
    "banana": {key1: 1},
    "cat": {key2: 2},
    "pizza": {key3: 3},
  }
]

// console.log(Object.keys(arrayWithObjects[0])[0])

for(const key in arrayWithObjects[0]) {
  for(const keyWithinKey in arrayWithObjects[0][key]) {
    console.log(arrayWithObjects[0][key][keyWithinKey])
  }
}