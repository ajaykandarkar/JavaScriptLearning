let name = " ajay";

function greet(name) // it takes parameter
{
     console.log(`Hello ${name} Welcome Site`)
}

greet(name);
greet('jay')

function sum(a,b)
{
    console.log(a+b);
}

sum(10,20);

// function expresion function is treated as a expresion
var result  = function sum(a,b){
   return a+b;
}

console.log(result(1,2))



//imeditaly invoked function
var multiply =(function mul(c,d){
   console.log(c*d)
})(5,10)

// it is atomaticaly call 

