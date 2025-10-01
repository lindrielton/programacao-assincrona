

let p = Promise.resolve(10)

console.log('lista')


console.log(p)

p
  .then((value) => {console.log(`o valor é ${value}`)})
  .catch((reason) => {console.log(new Error('error:' + reason))})
  