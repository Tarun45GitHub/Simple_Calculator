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
        clearN(button.value);
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
function clearN(str){
console.log();
    
    if(str=="DE"){
        if(mstring!=""){
          if(lstring!="") lstring= lstring.slice(0,-1);
          else mstring="";
        }
        else fstring=fstring.slice(0,-1); 
    }
    else if(str=="AC"){
        lstring="";
        mstring="";
        fstring="";
    }
  
}
function selectOperation(operation){
    if(fstring!="") mstring=operation;
    else return;
}
function calculate(){
    let ans;
   switch (mstring) {
    case '+':
        ans=parseFloat(fstring)+parseFloat(lstring);
        break;
   case '-':
    ans=parseFloat(fstring)-parseFloat(lstring);
    break;
    case '*':
        ans=parseFloat(fstring)*parseFloat(lstring);
    break;
    case '/':
        ans=parseFloat(fstring)/parseFloat(lstring);
    break;
    default:
        return;
        break;
   }
   fstring=ans;
   mstring='';
   lstring='';

}


