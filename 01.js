//reference to the function
//() calling the function, actually activating it


const addition = (x, y) => {
  return x + y;
}
const subtraction = (x, y) => {
  return x - y;
}
const multiplication = (x, y) => {
  return x * y;
}
const division = (x, y) => {
  return x / y;
}

const math = (a, b, callback) => {
  console.log(`Initial numbers: ${a} & ${b}`)
  console.log(`Result:${callback(a, b)}`)

}

math(4,2,multiplication)


