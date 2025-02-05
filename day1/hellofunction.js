var createHelloWorld = function(){
    return function(){
        return 'Hello World';
    };
};
//console.log(createHelloWorld());
console.log('Hello');

var createHelloWorld = function(){
    return () => 'Hello World';
};

var createHelloWorld = () => {
    return (... args) => 'Hello world';
};
console.log(createHelloWorld());