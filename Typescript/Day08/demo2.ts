let arr=[10,20,45,36];

// let t1=arr[0];

let [t1,t2,t3,t4]=arr;
// console.log(`
//     t1 :: ${t1}
//     t2 :: ${t2}
//     t3 :: ${t3}
//     t4 :: ${t4}
// `);

let [s1,...arr1]=arr;

console.log(`
    s1 :: ${s1}
    Arr1 :: ${arr1}
`)