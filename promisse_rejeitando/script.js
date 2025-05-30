function numeroReal(num){
    return new Promise((resolve,reject)=>{
        if(num == 10){
            resolve(console.log('valor valido'))
        }else{
            reject(new Error("valor invalido"))
        }
    })
}
 
numeroReal(10);
numeroReal(20);