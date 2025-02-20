let input = document.querySelector(".txt");
let buttons = document.querySelectorAll(".btn");

buttons.forEach(function(btn){
    btn.addEventListener("click", ()=>{
        let btns = btn.getAttribute("value-type");
        //input.value += btns;
        calculate(btns);
    });
});

function calculate(btns){
    if(btns === "C"){
        input.value = "";
    }else if (btns === "="){
        try{
            input.value = eval(input.value);
        }catch(error){
            input.value = "Error!";
        }
    }else{
        input.value += btns;
    }
}