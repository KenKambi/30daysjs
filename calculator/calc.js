/*
let valueOnBtn = document.querySelectorAll(".num");

valueOnBtn.forEach(button => {
addEventListener('click', ()=> {
    console.log(valueOnBtn.innerHTML = inputText.value);
})
})
*/

//Nice trial but tedioues. 
//Use get attribute function
//Use querySelectorALll and forEach 
//Use eval() method
let inputText =  document.querySelector(".input");
let value7 = document.querySelector(".num7");
let value8 = document.querySelector(".num8");
let valueC = document.querySelector(".numC");
let valuePlus = document.querySelector(".numPlus");
let valueSum = document.querySelector(".numSum");





value7.addEventListener('click', ()=>{
  console.log(inputText.value += value7.innerHTML);
});
value8.addEventListener('click', ()=>{
    console.log(inputText.value += value8.innerHTML);
  });
valueC.addEventListener('click', ()=>{
    console.log(inputText.value ='');
  });
valuePlus.addEventListener('click', ()=>{
    console.log(inputText.value += valuePlus.innerHTML);
  });
valueSum.addEventListener('click', ()=>{
    //console.log(inputText.value += valuePlus.innerHTML);
    let sums = eval(inputText.value)
    inputText.value = sums;
    console.log (sums);
  });


