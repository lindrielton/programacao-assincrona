
function* criandoid(){
    id = 0;
    while(true){
        yield id++;
    }
}

let criaId = criandoid();

console.log(criaId.next().value);
console.log(criaId.next().value);