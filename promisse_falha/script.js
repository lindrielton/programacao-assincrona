let p = Promise.resolve(new Error('não deu certo'));

let x = 1;
let y = 2;
const contar = () => x + y;
console.log( contar())



p.then((value) => console.log(value))
 .catch((reason) => console.error("falhou" + reason));
 
