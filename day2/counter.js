var createCounter = function (){
    return function(){
        return n++;
    };
};
//OR


var createCounter = function(){
    return () =>{
        return n++;
    };
};

//OR

var createCounter = () => {
    return () => {
        return n++;
    }
}