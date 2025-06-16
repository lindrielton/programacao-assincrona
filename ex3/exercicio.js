function promi(num) {
    return new Promise((resolve,reject)=>{
        if(num == undefined){
            reject(`erro valor invalido ${num}`);
        }else{
            resolve(`valor recebido ${num}`)
        }
    })
}

console.log(promi(10));