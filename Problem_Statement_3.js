// Problem Statement 3

const GivenData = "this is a big string".split(" ");
let inputData = prompt("Enter Text Here :").split(" ");

if (inputData.length > 6) {
    alert("please make sure that you have entered the words <= 6");
} else {

console.log(GivenData);
console.log(inputData);

let Array = [];



if ( GivenData[0] === inputData[0] |
     GivenData[1] === inputData[0] | 
     GivenData[2] === inputData[0] | 
     GivenData[3] === inputData[0] |
     GivenData[4] === inputData[0]  
   ){

    Array.push("true");
    
} else {
   
    Array.push("false");
    
};


if ( GivenData[0] === inputData[1] |
     GivenData[1] === inputData[1] | 
     GivenData[2] === inputData[1] | 
     GivenData[3] === inputData[1] |
     GivenData[4] === inputData[1] 
   ){
    
    Array.push("true");
    
    
} else {
   
    Array.push("false");
    
};


if ( GivenData[0] === inputData[2] |
     GivenData[1] === inputData[2] | 
     GivenData[2] === inputData[2] | 
     GivenData[3] === inputData[2] |
     GivenData[4] === inputData[2] 
   ){
    
    Array.push("true");
    
    
} else {
   
    Array.push("false");
    
};

if ( GivenData[0] === inputData[3] |
     GivenData[1] === inputData[3] | 
     GivenData[2] === inputData[3] | 
     GivenData[3] === inputData[3] |
     GivenData[4] === inputData[3] 
   ){
    
    Array.push("true");
    
    
} else {
   
    Array.push("false");
    
};

if ( GivenData[0] === inputData[4] |
     GivenData[1] === inputData[4] | 
     GivenData[2] === inputData[4] | 
     GivenData[3] === inputData[4] |
     GivenData[4] === inputData[4] 
   ){
    
    Array.push("true");
    
    
} else {
   
    Array.push("false");
    
};


if ( GivenData[0] === inputData[5] |
     GivenData[1] === inputData[5] | 
     GivenData[2] === inputData[5] | 
     GivenData[3] === inputData[5] |
     GivenData[4] === inputData[5] 
   ){
    
    Array.push("true");
    
    
} else {
   
    Array.push("false");
    
};


console.log(Array);

};