let input = document.querySelector(".txt");
let button = document.querySelectorAll(".btn");

button.forEach(function(btns)  {
    btns.addEventListener("click", ()=> {
        let bb = btns.getAttribute("value"); 
        calculate(bb);
    });

});

function calculate(bb){
    if (bb === "C"){
        input.value = "";
    }
    else if (bb === "="){
        try{
            input.value = eval(input.value);
        }catch(Error){
            input.value = "Error!";
        }
    }else{
        input.value += bb;
    }
}