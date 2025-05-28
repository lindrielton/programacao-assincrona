
let nome = Promise.resolve("joão");

console.log("outro cerviço");


console.log(nome);

nome.then((value) => {console.log(`é o valor de quem é, é do ${value}` )});