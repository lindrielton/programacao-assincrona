

let lista = (palavra) => console.log(palavra);
lista('obrigado Deus');


setTimeout(() => {
     console.log('por tudo que o senhor me Deu!')
     let h1 = document.createElement('h1');
     let texto = document.createTextNode("titulo principal");
     h1.appendChild(texto);

     let referencia = document.querySelector(".principal");
     let pai = referencia.parentNode
     pai.appendChild(h1)


},2000)


