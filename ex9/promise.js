
 


function lista(val){
    return new Promise((resolve, reject) =>{
        if(val == 10){
            resolve(console.log('showl'))
        }else{
            reject(console.log('error'))
        }
    })
}

lista(6)