const btnNumbers = document.querySelectorAll(".number");
const result = document.querySelector(".result span");
const btnOperators = document.querySelectorAll(".operator");
const btnClear = document.getElementById("clear")

const display = new Display(result);




btnNumbers.forEach(btn => {
    btn.addEventListener('click', ()=>{
        display.addNumber(btn.innerHTML)
    });
});

btnOperators.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        display.compute(btn.value)
    })
})


btnClear.addEventListener('click', ()=>{
    display.clear();
});
