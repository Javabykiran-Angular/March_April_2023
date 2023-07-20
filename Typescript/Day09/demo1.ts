//by default variable is deep copy 
let a=45;
let b=a;
// console.log(`
//     a = ${a}
//     b = ${b} 
//     ---------
// `);

b=50;
// console.log(`
// --------------
//     a = ${a}
//     b = ${b} 
//     ---------
// `);

let arr=[10,20,30,40];
// let arr1=arr;

// console.log(`
//     arr => ${arr}
//     arr1=> ${arr1}
// `)
// arr1[2]=800;
// console.log(`
// -------------------
//     arr => ${arr}
//     arr1=> ${arr1}
// `)

let [...arr1]=arr;
console.log(`
-------------------
    arr => ${arr}
    arr1=> ${arr1}
`)

arr1[2]=400;
console.log(`
-------------------
    arr => ${arr}
    arr1=> ${arr1}
`)