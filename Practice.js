//Q write a function of javascript that takes two number as parameter and one operand  return result

let result = (num1,num2,operand) =>{
    var add = null;
    switch(operand) {
        case '+':
         add = num1+num2
          break;
        case '-':
            add = num1-num2
          break;
      }
      return add;
}

console.log(result(1,2,"-"));


// reversed the string

let isreversed = (studentName) => {
    let name = ""; // Declare and initialize outside the loop
    for (let i = studentName.length - 1; i >= 0; i--) {
        name = name + studentName[i]; // Concatenate characters to form reversed string
    }
    return name;
}

isreversed("sas");

// check given string is pallodrom
 if(isreversed === "sas")
 {
    console.log("it is paldrom");
 }
 else
 {
    console.log("it is not paldrom");
 }





