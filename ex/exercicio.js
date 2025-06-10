


function verificar(a,b){
    return new Promise((resolve, reject )=>{
        if(a == true && b == false){
            resolve(console.log("a é true é b é false"));
        }else if(b == true && a == false){
            reject(console.log("b é true é a  é false"));
        }
    })
}

verificar(false,true);
