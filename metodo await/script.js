
function somarComDelay(a,b){
    return new Promise(resolve =>{
        setTimeout(function(){
            resolve(a + b);
        },4000);
    })
}


async function resultado(a,b,c){
    x = somarComDelay(a,b);
    y = c;

    return await x + y;
}


resultado(1,2,3).then(value => console.log(value));