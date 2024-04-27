// Scope
// let,const are block scoper letiable 
// var are global scoper letiable

// it is accescable outside the scope also
var a='ajay';

if(true)
{
    let a="jay"    
    console.log(a)  // jay
}

console.log(a)   // jay

var a ="sujay"

console.log("sujay")  // sujay


// let is block scoper
// we can redeclare it in different scope in one scope we can not redeclare it
let b='ajay';

if(true)
{
    let b="jay"  
    console.log(b) // jay
}

console.log(b)  // ajay

 b="sujay"  

console.log("sujay") // sujay


// const is not redeclare or reintailized

console.log("it is for const");
const name = "ajay";
console.log(name); // ajay

// name="sanajy"; // it give error to reassigned
// in different block we can used same name varaible
 if(true)
 {
    const name = "jay"
    console.log(name);
 }
 
console.log(name);

