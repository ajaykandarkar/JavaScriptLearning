let month = ['jan','feb','march','april']

// add dec at the end of array

month.push("dec")

console.log(month);

//add march to March

 let indextoUpdate = month.indexOf('march'); // here we need to find index
 month.splice(indextoUpdate,1,"March"); // and then we need to delete that index and add to newupdated value

 console.log(month);

 // filter

 let value= 6;
 let number = [1,2,3,4,5,6,7,8,9,6];

  const number2 = number.filter((ele)=> ele !== value );

   console.log("filter output",number2);


   const products = [{name : "laptop" , price : 1200},{name : "phone" , price : 800},{name : "watch" , price : 200}];

   lessPriceProducts = products.filter((ele)=> ele.price < 500)

   console.log(lessPriceProducts);

// find unique value from array

let uniqueValue = products.filter((ele,index,arr)=>
{
    return number.indexOf(ele) === index;
});

console.log(uniqueValue);
  
//  for sorting the array

let data = [1,2,3,4,5,6,7,8,7,2];

let sortedData = data.sort((a,b)=>{
    if(a>b) 
    return 1;
    if(a<b)
    return -1;
})

console.log(sortedData);