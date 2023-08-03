class Display{
    constructor(result ){
        this.result = result;
        this.preResult = '';
        this.calculator = new Calculator();
        this.actValue = '';
        this.preValue = '';
        this.operadorType = undefined;
    }

    

    addNumber(num){
        if (num === '.' && this.actValue.includes('.')) {
            this.actValue = this.actValue.toString();
            this.show();
        }else if(num === '0' && this.actValue ===''){
            this.actValue = this.actValue.toString();
            this.show();
        }else if(num === '0' && this.actValue ===''){
            this.actValue = this.actValue.toString();
            this.show();
        }else if(this.actValue ==='0'){
            this.actValue = '';
            this.show();
        }
        else{
            this.actValue = this.actValue.toString() + num.toString();
            this.show();
        }
    }

    calculate(){
        const preValue = parseFloat(this.preValue);        
        const actValue = parseFloat(this.actValue);

        if (isNaN(actValue) || isNaN(preValue)) return
        this.actValue = this.calculator[this.operadorType](preValue, actValue);
    }

    compute(tipo){
        this.operadorType !== "equals" && this.calculate();
        this.operadorType = tipo;
        this.preValue = this.actValue || this.preValue;
        this.show();
        this.actValue='';
    }

    clear(){
        this.result = result;
        this.preResult = '';
        this.actValue = '';
        this.preValue = '';
        this.operadorType = undefined;
        this.show();
    }

    change(){
        
        this.actValue=-this.actValue.toString();
        this.show();
    }

    percent(){
        if(this.actValue == '') {
            this.actValue = (this.preResult*0.01).toString();
            this.show(); 
        }else if(this.actValue == this.preResult) {
            this.actValue = (this.actValue*0.01).toString();
            this.show(); 
        }else{
        this.actValue = (this.actValue*0.01).toString();
        this.show(); 
        }
        
    }

    show(){
        
        this.result.textContent = this.actValue;
        this.preResult = this.preValue;
        console.log(this.preValue);
    }

}
