
async function somar(a, b){
    return a - b;
}

somar(40,30).then(value => console.log(value));



async function checar(num){
      return Math.max(...num);
}

checar([1,2,3,4,5]).then(value => console.log(value))