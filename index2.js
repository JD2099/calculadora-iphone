const numeros = document.querySelectorAll(".number");
const operadores = document.querySelectorAll(".operator");
const pantalla = document.querySelector('.result span');
const igual = document.getElementById("equals");
const clear = document.getElementById('clear');
const percent = document.getElementById('percent');
const change = document.getElementById('change');


let valorActual = '0';
let valorAnterior = '';
let tipoOperador ='';
let esperandoNumero = false;
let esperandoOperador = false;
let solucion = '';
let calculadora = new Calculator();

//Funciones

function agregarNumero(num) {
     if(pantalla.textContent === '0'){
        if (pantalla.textContent === '0' && num === '.') {
            pantalla.textContent = '0.'
            valorActual = '0.'
        }else{
        pantalla.textContent = ''
        valorActual = num;
        mostrar();
        }   
    }else if(pantalla.textContent === '0.' && num === '.'){
        return;
        
    }else {
        valorActual = num ;
        mostrar();
        valorActual = pantalla.textContent;
    }

    
}

function almacenaResuelve(op){
    valorAnterior = parseFloat(valorActual);
    tipoOperador = op;
    if (esperandoOperador === true) {
        resolver();
    } else {
        esperandoOperador = true;    
        pantalla.textContent = '0' 
    }  
    valorActual = ''; 
          
    }

function resolver(){
    
    solucion = calculadora[tipoOperador](parseFloat(valorAnterior), parseFloat(valorActual))
    pantalla.textContent = solucion.toString();
    valorActual = solucion.toString();
    valorAnterior = ''
    tipoOperador = ''
    esperandoOperador = false;
}


function mostrar(){
    pantalla.textContent = pantalla.textContent + valorActual;
}



function ac(){
    pantalla.textContent = '';
    valorActual = '0';
    valorAnterior = '0';
    tipoOperador = '';
    solucion = '';
    esperandoNumero = false;
    esperandoOperador= false;
    mostrar();
}

function aplicarPercent(){
    const operacionPorcentaje = parseFloat(pantalla.textContent)*0.01;
    pantalla.textContent = operacionPorcentaje.toString();
    valorActual = operacionPorcentaje.toString();
    
}

function aplicarChange(){
    pantalla.textContent = -pantalla.textContent;
    valorActual = pantalla.textContent.toString();
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

