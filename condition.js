
// if else program in javascript
let age=3;
let citizen ="India"
let registe = true;

if(age >= 18 &&  citizen === "India" && registe)
{
    console.log("It is eligibal for vote")
}
else if(age >= 18 &&  citizen === "India" && !registe)
{
    console.log("It is not eligibal for vote")
}
else if(age >= 18 &&  citizen !== "India" && !registe)
{
    console.log("It is not eligibal for vote")
}
else{
    console.log("It is not eligibal for vote")
}


// write a program to check it is even or ood


  let num = -4;
  
      if(num % 2 === 0)
      console.log("it is a even number");
    else
    console.log("it is odd number");

// write a program it prime 

let flag = false;
  for(let i=2;i< num;i++)
  {
    if(num % i == 0)
    {
        flag=true;
        break;
    }
  }
    if(flag===false)
    {
      console.log("it is prime number")
    }

    // write a code to check the number is positive negative zero

    if(num >= 0)
    {
       console.log("it is positive number")
    }
    else if(num <= 0)
    {
        console.log("it is negative number")
    }
    else{
        console.log("it is zero")
    }