const inputBox = document.getElementById('input');
const expressionDiv = document.getElementById('value');
const resultDiv = document.getElementById('result');


let expression = '';
let result = '';


function buttonClick(button){
   const target = button.target;
   const action = target.dataset.action ;
   const value = target.dataset.value; 
   
   switch(action){
      case 'number':
      case 'decimal':
         addValue (value);
         break;
      
      case 'clear':
         clearDisplay();
         break;
      case 'backspace':
         backSpace();
         break;
      case 'addition':
      case 'subtraction':
      case 'multiplication':
      case 'division':
         if(expression!=='' && !LastDigit()){
            addValue(value);
         }
         else if(expression==='' && result!=''){
          startFromResult(value);
         }
         break;
      
      case 'equals':
        if(!isNaN(expression.slice(-1))) equal();
        else {
         alert('Please entre a valid expression');
        }
         break;

      case 'negate' :
        if(result!='') changeTheSignOfTheResult();
        break;
      
      case 'mod' : 
        if(result!='') percentage();
        break;
   }
   updateDisplay(expression, result);
}

inputBox.addEventListener('click' , buttonClick);

function addValue(value){
   expression+=value;
}


function updateDisplay (expression , result){
   expressionDiv.textContent = expression;
   resultDiv.textContent = result;
}

function clearDisplay (){
     expression = '';
     result = ''; 
}

function backSpace() {
    expression = expression.slice(0, -1);
}

function LastDigit (){
   return isNaN(parseInt(expression.slice(-1)));
}

function startFromResult(value){
   expression += result+value ;
}  

function equal(){
    const tempResults = eval(expression);
    result = ''; 
    result+= String(tempResults);
}


function changeTheSignOfTheResult(){
    let intResult = parseFloat(result);
    intResult = -intResult ;
    result = '';
    result = String(intResult);
}

function percentage(){
   let intResult = parseFloat(result);
   intResult/= 100;
   result = '';
   result = String(intResult);
}
