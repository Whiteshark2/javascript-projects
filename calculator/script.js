const calDis=document.querySelector('h1')
const inputButtons=document.querySelectorAll('button')
const clearButton=document.getElementById('clear-btn')

let firstValue=0;
let operatorValue='';
let awaitingValue=false;



function sendNumber(number){
    
    if(awaitingValue){
        calDis.textContent=number
        awaitingValue=false
    }else{
        const displayValue=calDis.textContent
        calDis.textContent=displayValue=== '0'?number:displayValue+number
    }
}


function addDecimal(){
    if(awaitingValue){
        return
    }
    if(!calDis.textContent.includes('.')){
        calDis.textContent=`${calDis.textContent}.`
    }
}

function calculation(firstValue,operator,secondValue){
    let res=0;
    if(operator=='+'){
        res=firstValue+secondValue
    }
    else if( operator=='-'){
        res=firstValue-secondValue
    }
    else if(operator=='*'){
        res=firstValue*secondValue
    }
    else if(operator=='/'){
        res=firstValue/secondValue
    }
    return res;
}

function useOperator(operator){
    const currValue=Number(calDis.textContent)
    if(operatorValue && awaitingValue){
        operatorValue=operator
        return 
    }
    if(!firstValue){
        firstValue=currValue
    }
    else{
        console.log(firstValue,operatorValue,currValue)
        let ans=calculation(firstValue,operatorValue,currValue)
        calDis.textContent=ans;
        firstValue=ans;
        
    }
    awaitingValue=true
    operatorValue=operator
    
}

inputButtons.forEach((inputButton)=>{
    if(inputButton.classList.length===0){
        inputButton.addEventListener('click',()=>{
            sendNumber(inputButton.value)
        })
    }
    else if(inputButton.classList.contains('operator')){
        inputButton.addEventListener('click',()=>{
            useOperator(inputButton.value)
        })
    }
    else if(inputButton.classList.contains('decimal')){
        inputButton.addEventListener('click',()=>{
            addDecimal()
        })
    }
})

function resetAll(){
    firstValue=0;
    operator='';
    awaitingValue=false;
    calDis.textContent='0'
}

clearButton.addEventListener('click',()=>{
    resetAll()
})