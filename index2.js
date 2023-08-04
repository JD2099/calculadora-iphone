const numeros = document.querySelectorAll(".number");
const operadores = document.querySelectorAll(".operator");
const pantalla = document.querySelector('.result span');
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

//Funciones

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


function mostrar(){
    pantalla.textContent = pantalla.textContent + valorActual;
    valorActual = pantalla.textContent; 
}



function ac(){
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

function aplicarPercent(){
    valorActual = valorActual*0.01;
    pantalla.textContent = '';
    mostrar();

}

function aplicarChange(){
    valorActual = -pantalla.textContent
    pantalla.textContent = ''
    mostrar();
}

//Eventos

numeros.forEach(btnNumero => {
    btnNumero.addEventListener('click', ()=>{
        agregarNumero(btnNumero.innerHTML);
    })
});

operadores.forEach(btnOperador =>{
    btnOperador.addEventListener('click',()=>{
        almacenaResuelve(btnOperador.value);
    })
})

igual.addEventListener('click', ()=>{
    resolver();
})

clear.addEventListener('click',()=>{
    ac();
})

percent.addEventListener ('click',()=>{
    aplicarPercent();
})

change.addEventListener('click',()=>{
    aplicarChange();
})

