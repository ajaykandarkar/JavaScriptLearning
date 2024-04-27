// Datatype in javascript

//datatyes means it define  value that variable can hold

// two type of javascript primetive and nonprimetive

//premetive datatypes are  1.String ,2.Number, 3.boolean ,4.undefiend, 5.Null , 6.Bigint ,7. symbol
// object datatype are 1.object,2.array, 3.date


// ? Number is represent a numeric value includind floating and integer value

var num1 = 10;
console.log(typeof(num1)); // number

var num2=10.20;
console.log(typeof(num2)); // number

// ? String is represent a Sequence of character enclosed in single and double cotes

var name = "ajay Kandarkar";
console.log(typeof(name)); //string

//? Boolean represent a logical entity of two values : true or false

 var a = 10;
 var c =20;
 var d=a>20;
 console.log(d) // false
 console.log(typeof(d)); // boolean

 //? undefiend represent a absence of value or an unintialized variable

 var m;
 console.log(m);//undefine


 //?  Interview question on javascript

 // Q1 what is difference between null and undefined
// 
 //Q2 what is purpose of typeof operator in javascript
 // it is used to define the type of variable

 //Q3 what is type of typeof(null) in javascript
var badtime = null;
console.log(typeof(badtime)); // object

// Q4.What is premetive data type


// Q4 How to convert string to number 

 var n = "10"
 console.log(typeof(+n)); // only by adding +   number

 // one more method is that by using number constructor
   console.log(typeof Number(n)) // number


// Q5 convert number to string in javascript

  var s = 10;
  console.log(typeof String(s)); // string
  console.log(typeof( s+" ")); // string


  // parseInt and parseFloat are both function in javascript for convert string to number 

 

  // parseInt is used to parse the string and conert into the number
  // it ignore decimal point value
  var stringNumber1 = "10.77"
  var number1 = parseInt(stringNumber1);
  console.log(typeof number1)
  console.log(number1)  //10


  // parseFloat is used to parse string value and convert into float

  var stringNumber2 = "0.56"
  var number2 = parseFloat(stringNumber2);
  console.log(typeof number2)
  console.log(number2)  // 0.56