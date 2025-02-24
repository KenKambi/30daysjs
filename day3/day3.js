//alert("Hello");

//let userName = prompt("What is youe name?", "");
//alert("Hello " + userName);

//Don't put .value at input coz it'll take the initial value being an empty string
let firstName = document.querySelector('.first-name');
let secondName = document.querySelector('.second-name');
let age = document.querySelector('.age');

let greeting = document.querySelector('.greeting');
let text = document.querySelector('.text');

//greeting.addEventListener('click', () => {   
//});

function sendGreeting (){
    //get the input value to display on the alert box
    let theFirstName = firstName.value;
    let theSecondName = secondName.value;
    let theAge = isNaN(age.value);

    if (theFirstName && theSecondName){
        if(theAge){
            //alert("Please enter a valid number!");
            text.innerHTML = "Please enter a valid number at Age";
        } else{
            text.innerHTML = "Hello " + theFirstName +" "+ theSecondName +" "+ age.value;
        };
    }else{
     text.innerHTML = "Kindly fill all the fields"
    }
    console.log("sent");
};



//console.log(theFirstName);

let year = new Date().getFullYear();
console.log(year);

let copyright = '';
copyright += `
    <p>
        <span> &copy ${year} </span>
    </p>
    `;
document.querySelector('.copyright').innerHTML = copyright;

//edit any element in an existing webpage
//document.designMode = 'on'

//Toggle between Light and Dark mode
let wholeBody = document.querySelector('.body');
let toggleBtn = document.querySelector('.dark-mode');

toggleBtn.addEventListener('click', () => {
    let btnChange = wholeBody.classList.toggle("body-whole");
    
    //Longer version of if else 
    if (btnChange) {
        toggleBtn.innerHTML = 'Light Mode';
    }else{
        toggleBtn.innerHTML = 'Dark Mode';
    }
    

    //shorter if-else statent
    //toggleBtn.innerHTML = btnChange ? 'Light Mode':'Dark Mode';
    
});

/*
let classes = new Class('hello');
text.toHTML()
function Class (){

}
*/
//let request = new AjaxRequest();
//request.send("GET", "https://chatgpt.com", sendGreeting());
//console.log(request.getStatus());

//var x = 5;
//var y = 8;
//console.log(x + y); 

let object = {
    name: "Ken",
    age: 20,
    fast: 80,
    drive: function (time){
        console.log("the speed is " + time);
        console.log(this.age)
    },
    corner:{

    }
 
    
}
object.drive(30);
//console.log(object.name);

let Car =  function(driver, speed){
    this.driver = driver;
    this.speed = speed;
    this.drive = function(){
        console.log("the speed is " + speed);
    };

} 
let newCar = new Car("Jane", 30);


let bus = {
    tires: 20,
    passengers: "hello",
    distance: function(){
        console.log("Hello there" + this.passengers);
    },
    seats:{
        right: 12,
        left: 12
    }
}

bus.distance();
console.log(bus.seats);


let Bus = function (nWheels,nSeats){
    this.wheels = nWheels;
    this.seats = nSeats;
    this.speed = function(n,s){
        console.log("Heheheh " + this.wheels);
    }
};

//console.log(speed)
let bus1 = new Bus( 20, 10);
bus1.speed(20,20)

let  birthday = new Date(1998, 9, 23);
console.log(birthday.getDay())// (5)Friday