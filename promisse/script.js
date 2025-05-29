
let nome = Promise.resolve(10);

console.log("outro cerviço");


console.log(nome);

 nome.then((value) => {return value + 5})
     .then((value) => {console.log(value)})