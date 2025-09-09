function checar(num){
   return new Promise((resolve, reject) => {
        if(num % 2 ==0){
             resolve(console.log(`o nummero ${num} é par`));
        }else{
            reject(console.log(`o numero ${num} é inpar`));
        }
    })
}


checar(5)