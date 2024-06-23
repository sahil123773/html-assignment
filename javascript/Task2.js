function cal(op){
    var num1=parseFloat(document.getElementById('num1').value);
    var num2=parseFloat(document.getElementById('num2').value);
    var result;

    if(isNaN(num1) || isNaN(num2)){
        res="Please enter a vilid input";
    }else{
        switch(op){
            case '+' :
                result = num1+num2;
                break;

            case '-' :
                result = num1-num2;
                break;
            
            case '*' :
                 result = num1*num2;
                break;
            
            case '/' :
                result = num1/num2;
                 break;
            
             case '%' :
                 result = num1%num2;
                 break;
            default:
                result = 'Invalid';
        }
    }

    document.getElementById('result').textContent = result;
}