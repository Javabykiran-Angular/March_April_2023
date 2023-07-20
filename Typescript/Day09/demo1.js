//by default variable is deep copy 
var a = 45;
var b = a;
// console.log(`
//     a = ${a}
//     b = ${b} 
//     ---------
// `);
b = 50;
// console.log(`
// --------------
//     a = ${a}
//     b = ${b} 
//     ---------
// `);
var arr = [10, 20, 30, 40];
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
var arr1 = arr.slice(0);
console.log("\n-------------------\n    arr => ".concat(arr, "\n    arr1=> ").concat(arr1, "\n"));
arr1[2] = 400;
console.log("\n-------------------\n    arr => ".concat(arr, "\n    arr1=> ").concat(arr1, "\n"));
