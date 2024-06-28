document.addEventListener("DOMContentLoaded", function(){
    function pick(val){
        document.getElementById("result").value +=val;
    }

    function clearDisplay(){
        document.getElementById('result').value = ' ';
    }

    function calculate(){
        let result = document.getElementById('result');
        try{
            result.value = eval(result.value);
        }catch(e){
            result.value = 'Error';
        }
    }
    const buttons = document.querySelectorAll('#calcu input[type="button"]');
    
    buttons.forEach(button =>{
        button.addEventListener('click', function(){
            const value = this.value;

            if (!isNaN(value) || value === '.'){
                pick(value);
            }else if (value === 'Del'){
                clearDisplay();
            }else if(value === '='){
                calculate();
            }else{
                pick(value);
            }

        });
    });
});
