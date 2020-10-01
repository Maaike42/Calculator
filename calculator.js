//my functions

function add(x,y){
  return x+y
}

function substract(x,y){
  return x-y
}

function multiply(x,y){
  return x*y
}

function divide(x,y){
  return x/y
}

function operate (x,y, operator){
    let result;
  switch (operator){
    case 'add':
      result=add(x,y)
      break;
    case 'substract':
      result=substract(x,y)
      break;
    case 'multiply':
      result=multiply(x,y)
      break;
    case 'divide':
      if(y==0){
      result= 'Infinity'
      }else if (this.id){
      result=divide(x,y) 
      }
      break;
  }
  return result;
}

const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button and add a eventListener
buttons.forEach((button) => {
  button.addEventListener('click',doTheMath);
  });


let array=[];

function doTheMath(){
let endResult;
  if(this.id=='clear'){
    array.length=0;;
    endResult='';
  }else{
    array.push(this.id);
}

  if (array.length==4){
    endResult= operate(parseFloat(array[0]), parseFloat(array[2]), array[1]);
    if (array[3]=='equals'){ 
    array.length=0;
    array.push(endResult);
} else{
    let newOperator=parseFloat(array[3]);
    array.length=0;
    array.push(endResult);
    array.push (newOperator); 
}
 const divResult = document.getElementById('result');
  divResult.textContent =Math.round( endResult * 100 + Number.EPSILON ) / 100;
}
 
} 



