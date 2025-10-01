

//resolva um programa que trate de valores falsos e verdadeiros com orimeses



let valor = prompt(`digite o valor que você quer checar:
  \n1. true
  \n2 false`)



function chek(e){
      return new Promise((resolve , reject) => {
            if(e == 'true' ){
                  resolve(alert(('valor verdadeiro')))
            }else{
                 reject(alert(('escolha errada ^.^ ')))
            }
      })
}

chek(valor)