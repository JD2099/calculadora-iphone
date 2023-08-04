const numeros = document.querySelectorAll(".number");
const operadores = document.querySelectorAll(".operator");
const operadoresNO = document.querySelectorAll(".operatorNO")
const pantalla = document.querySelector('.result span');
const divPantalla = document.getElementById('divPantalla');
const divDivPantalla = document.getElementById('divDivPantalla');
const igual = document.getElementById("equals");
const clear = document.getElementById('clear');
const percent = document.getElementById('percent');
const change = document.getElementById('change');



let valorActual = '0';
let valorAnterior = '0';
let tipoOperador ='';
let estadoOperador = false;
let estadoAlmacenado = false;
let esOpDoble = false;
let solucion = '0';
let calculadora = new Calculator();

//Desplazar resultado de pantalla
let posX;
const move = (e) =>{
    divPantalla.style.left = `${e.clientX - posX}px`
}

divPantalla.addEventListener('mousedown', (e)=>{
    if (pantalla.textContent.length>8 ) {
        posX = e.clientX - divPantalla.offsetLeft;
        document.addEventListener('mousemove', move)
    }
    
})

document.addEventListener('mouseup',()=>{
    document.removeEventListener('mousemove', move)
})


//Mostrar resultado
function mostrar(){
    pantalla.textContent = pantalla.textContent + valorActual;
    valorActual = pantalla.textContent; 
}


//Numeros

numeros.forEach(btnNumero => {
    btnNumero.addEventListener('click', ()=>{
        agregarNumero(btnNumero.innerHTML);
    })
});

function agregarNumero(num) {
    if(estadoOperador===true && pantalla.textContent !== '0'){
        pantalla.textContent = ''
        valorActual = num;
        mostrar();
    }else{
            if (pantalla.textContent === '0' && num === '.') {
            pantalla.textContent = ''
            valorActual = '0.'
            mostrar();
        }else if(pantalla.textContent === '0' && num !== '.'){
            pantalla.textContent = ''
            valorActual=num;
            mostrar();
        }else if(pantalla.textContent === '0.' && num === '.'){
            pantalla.textContent = ''
            valorActual = '0.'
            mostrar();
        }else if(pantalla.textContent === '0.' && num !== '.'){
            valorActual = num;
            mostrar();
        }else if(valorActual.includes('.') && num === '.'){
            pantalla.textContent = ''
            mostrar();
        }else{
            valorActual = num;
            mostrar();
        }
    }
    estadoOperador = false;
    esOpDoble = false;
    
}


//Operaciones
operadores.forEach(btnOperador =>{
    btnOperador.addEventListener('click',()=>{
        almacenaResuelve(btnOperador.value);
    })
})

function almacenaResuelve(op){
    if (esOpDoble === true) {
        valorAnterior = parseFloat(pantalla.textContent);
        tipoOperador = op
        return;
    } else {
        if (estadoAlmacenado === true && esOpDoble === false) {
            resolver();
        }
    }
    
        valorAnterior = parseFloat(valorActual);
        tipoOperador = op;
        valorActual = '';
        estadoOperador = true; 
        estadoAlmacenado = true;
        esOpDoble = true;
        console.log(valorActual)
        console.log(valorAnterior)
    
}
//
operadoresNO.forEach(btnOpNO =>{
    btnOpNO.addEventListener('click',()=>{
        alert('Hola, aun no programo esto :)');       
    })

})


//Resultado
igual.addEventListener('click', ()=>{
    resolver();
})

function resolver(){
    if (valorActual === '') {
        return;
    } else {
        solucion = calculadora[tipoOperador](parseFloat(valorAnterior), parseFloat(valorActual))
        pantalla.textContent = '';
        valorActual = solucion.toString();
        mostrar();    
        valorAnterior = ''
        tipoOperador = ''
        solucion = '0'
        estadoOperador = false;
        estadoAlmacenado = false;
        esOpDoble = false;
    }

    
}


//Limpiar
clear.addEventListener('click',()=>{
    ac();
})

function ac(){
    divPantalla.style.left = divDivPantalla.style.left; 
    pantalla.textContent = '';
    valorActual = '0';
    valorAnterior = '0';
    tipoOperador = '';
    solucion = '0';
    estadoOperador= false;
    estadoAlmacenado = false;
    esOpDoble = false;
    mostrar();
}


//Porcentaje
percent.addEventListener ('click',()=>{
    aplicarPercent();
})

function aplicarPercent(){
    valorActual = valorActual*0.01;
    pantalla.textContent = '';
    mostrar();

}


//Cambio de signo
change.addEventListener('click',()=>{
    aplicarChange();
})

function aplicarChange(){
    valorActual = -pantalla.textContent
    pantalla.textContent = ''
    mostrar();
}


