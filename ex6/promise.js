

let p = Promise.resolve(5)

console.log('lista')


console.log(p)

p
  .then((value) => {console.log(`o valor é ${value + 10}`)});