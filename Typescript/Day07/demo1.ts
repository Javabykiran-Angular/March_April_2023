
// array is dynamically growable & shrinkable
// array size is not fixed 
// u can store homogenous as well as hetrogenous data type value 
// it is strat indexing from zero.

let a:number[]=[10,20,30,40];
let a1=[50,60,70,80];
let a2:any[]=[];
let a3=[2.5,'Sumit',80,true];
let str:(string | boolean)[]=['Sumit'];

// for(let i=0;i<a1.length;i++){
//     console.log("Array is "+a1[i]);
// }

// console.log(a1);
// console.log(a1.join("  "));
// console.log(a1.join());

// for each 
// a.forEach((myvalue,i,arr)=>{
//     console.log("Array value is "+myvalue+" Index is "+i+" array is "+arr);
// });

//rest parameter function

function display(str:string,...item:number[]){
    console.log("Value is "+str+"  "+item.join("  "))
}

// display(10,20,100,80,90,45);
// display(10,20);
// display("Sumit",45,89);

//push & pop method 
// It works on array 
// it works on LIFO Principal => Last in First Out 
// u can used to store value into array dynamically 

let b:number[]=[];

b.push(60);
console.log(b);
b.push(100,89,90,63);
console.log(b);
let res=b.pop();
console.log(b);
console.log("poped value "+res);












