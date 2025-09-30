

let p = Promise.resolve(new Error('deu errado seu codigo'));


console.log('lista')


p
  .then((value) => console.log(value))
  .catch((reason) => console.log('falhou ' + reason));