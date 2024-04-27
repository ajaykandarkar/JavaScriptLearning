// Array
// array is an object which store in a similar type of element

const person = ["ajay","kunal","sanajy","rajiv","mahesh"];

for(let i=0;i<person.length;i++)
{
    console.log(person[i]); // we can acces all the name in array by index
}

// first index is on 0;
// and last index in length - 1;


// array consider as .at methode if element is not present the it consider as ast one ad start from right to left


 const arr = ["ajay","kunal","sanajy","rajiv","mahesh"];
 //         -5       -4        -3         -2       -1

    console.log(arr.at(-3)); // we can acces all the name in array by index


// creatng array is javascript
// 1. by using constructor

let fruits = new Array("apple","mango")
console.log(fruits);

// how to create an empty array

const animals = []; // it is creation of an empty array


// for accesing array element method 

// by forEach
// if we are trying to store a data in forEach it give a undefiend data
// dis we are not prforming chaining
const books = ["hind","english","marathi","science"];
 
books.forEach((curr,index,arr)=>{
    console.log(`${curr} and ${index}`)
})

// by using map
// advantage of map is we stored a data in variable
// we are perfoming chaing
 const data = books.map((curr,index,arr)=>{
     return `${curr} and ${index}`;
})

console.log(data)


// array operation

// method of adding element add in array at last position

//push it is used to add element at the end of array

// pop is used to delete that last elemnt of array

// 


let color = ["red","orange","Pink","yellow"];

const display = ()=>{
    color.map((ele,index)=>{
        console.log(ele)
    })
}
color.push("green")

display();

color.pop(4);

display();

color.splice(1,0,'mint')

display();


// incudes is useed to check the element are present in array
// it return ture or false
  console.log(color.includes("Pink")); 

  