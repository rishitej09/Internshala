// Problem Statement 1

let Array = [] ;

let Input1 = parseInt(prompt("Insert The Values Here :"));
let Input2 = parseInt(prompt("Insert The Values Here :"));
let Input3 = parseInt(prompt("Insert The Values Here :"));
let Input4 = parseInt(prompt("Insert The Values Here :"));
let Input5 = parseInt(prompt("Insert The Values Here :"));

Array.push(Input1,Input2,Input3,Input4,Input5);

const NewArray = Array.reverse(Array.sort());

function LastIntegers() {
    console.log(Input1,Input2,Input3,Input4,Input5);
    console.log(NewArray);
    console.log(NewArray[0],NewArray[1],NewArray[2]);
}

LastIntegers();