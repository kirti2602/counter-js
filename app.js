let count = 0;
let heading = document.getElementById("heading");
let counterVal = document.getElementById("counter-val")
let btnDec = document.getElementById("btn-dec");
let btnRe = document.getElementById("btn-re");
let btnIn = document.getElementById("btn-in");

btnDec.addEventListener("click", function(){
    
    counterVal.innerText = --count;
    if(count < 0 ){
        counterVal.style.color = "red";
    }
    else if(count > 0){
        counterVal.style.color = "green";
    }
    else{
        counterVal.style.color = "#112031";
    }
})

btnRe.addEventListener("click", function(){
    count = 0;
    counterVal.innerText = count;
    counterVal.style.color = "#112031";
    
})

btnIn.addEventListener("click", function(){
    counterVal.innerText = ++count;
    if(count < 0 ){
        counterVal.style.color = "red";
    }
    else if(count > 0){
        counterVal.style.color = "green";
    }
    else{
        counterVal.style.color = '#112031';
    }
})