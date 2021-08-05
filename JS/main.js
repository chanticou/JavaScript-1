
//llamado
const nombre = document.getElementById('nombre');
const letras = nombre.innerHTML.split('')//guardo en un array letra x letra
console.log(letras)

//borro nombre desde JS
nombre.innerText=''


//fotEach

letras.forEach((letra)=>{

  let caracter =  letra === ' ' ? '&nbsp;' : letra  //Condicional para que se deje espacio --operadores ternarios
                                                    //si la letra = '  pone un epacio sino pone la letra'
    nombre.innerHTML=nombre.innerHTML+`
        <div>
            <span>${caracter}</span>
            <span class='segunda-linea'>${caracter}</span>
        </div>
    `
});

//console.log(nombre.children.length) //numero de elementos hijo que tengo adentro de nombre


//Ahroa voy a hacer la animacion

nombre.addEventListener('mouseenter', ()=>{

    let contador = 0;


    let intervalo = setInterval(()=>{
        if(contador <= nombre.children.length){
            nombre.children[contador].classList.add('animacion');
            contador += 1;
           
        }else{
            clearInterval(intervalo)
        }
    }, 30);

});

nombre.addEventListener('mouseleave', ()=>{

    let contador = 0;


    let intervalo = setInterval(()=>{
        if(contador <= nombre.children.length){
            nombre.children[contador].classList.remove('animacion');
            contador += 1;
        }else{
            clearInterval(intervalo)
        }
    }, 30);

});


