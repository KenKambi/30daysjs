/*
let valueOnBtn = document.querySelectorAll(".num");

valueOnBtn.forEach(button => {
addEventListener('click', ()=> {
    console.log(valueOnBtn.innerHTML = inputText.value);
})
})
*/

//let inputText = document.querySelectorAll('.input');
//console.log(inputText.value);
let inputText =  document.querySelector(".input");
let value7 = document.querySelector(".num7");
let value8 = document.querySelector(".num8");
let valueC = document.querySelector(".numC");




value7.addEventListener('click', ()=>{
  console.log(inputText.value += value7.innerHTML);
});
value8.addEventListener('click', ()=>{
    console.log(inputText.value += value8.innerHTML);
  });
valueC.addEventListener('click', ()=>{
    console.log(inputText.value ='');
  });

//console.log(valueOnBtn.innerHTML);
//console.log(inputText.value = valueOnBtn.innerHTML)