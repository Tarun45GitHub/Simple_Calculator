let numberbuttons=document.querySelectorAll(".num");
let opbuttons=document.querySelectorAll(".opr");
let slovebutton=document.querySelectorAll(".slove");
let clearbutton=document.querySelectorAll(".clear");
let currendOperand=document.getElementById("first");
let nextOperand=document.getElementById("last")
let operation=document.getElementById("opa");
let fstring="";
let mstring="";
let lstring="";
console.log(fstring);
numberbuttons.forEach(button=>{
    button.addEventListener('click',()=>{
        appendNumber(button.value);
        updateDisplay();

    })
})
opbuttons.forEach(button=>{
    button.addEventListener('click',()=>{
        selectOperation(button.value);
        updateDisplay();
    })
})
slovebutton.forEach(button=>{
    button.addEventListener('click',()=>{
        calculate();
        updateDisplay();
    })
})
clearbutton.forEach(button=>{
    button.addEventListener('click',()=>{
        clearN();
        updateDisplay();
    })
})
function appendNumber(number){
   
    if(mstring==="") fstring=fstring+number;
    else  lstring=lstring+number;
   
   
}
function updateDisplay(){
    currendOperand.innerText=fstring;
    if(mstring!=''){
         nextOperand.innerText=lstring;
         operation.innerText=mstring;
    }
    else{
        nextOperand.innerText='';
        operation.innerText='';
    }
}
function clearN(){
   fstring='';
   mstring='';
   lstring='';
}
function selectOperation(operation){
    if(fstring!="") mstring=operation;
    else return;
}
function calculate(){
    let ans;
   switch (mstring) {
    case '+':
        ans=parseInt(fstring)+parseInt(lstring);
        break;
   case '-':
    ans=parseInt(fstring)-parseInt(lstring);
    break;
    case '*':
        ans=parseInt(fstring)*parseInt(lstring);
    break;
    case '/':
        ans=parseInt(fstring)/parseInt(lstring);
    break;
    default:
        return;
        break;
   }
   fstring=ans;
   mstring='';
   lstring='';

}


