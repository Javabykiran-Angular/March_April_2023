//splice
// u can add or remove a particular location data 

// let a:number[]=[10,20,30,45,85,96,12];
// console.log(a);
// a.splice(4,0,100);
// console.log(a);
// a.splice(4,0,90,200);
// console.log(a);
// a.splice(6,1);
// console.log(a);
// a.splice(2,3);
// console.log(a);
// a.splice(2,1,500);
// console.log(a);
// a.splice(4,1,1000,600);
// console.log(a);

//slice
// To copy a section of data from an array and return a new array 
// let a:number[]=[10,20,30,45,85,96,12];
let course:string[]=["Core java",'Advanced Java','HTML,CSS,JS','Spring Boot','Hibernate','JSP','Angular 12','AWS','Jenking','Microservices','Docker'];
// console.log(course);
let temparr=course.slice(1,6);
// console.log(course);
// console.log(`
// --------------Copied Array------
//         ${temparr}
// `);
// let temparr2=course.slice(1);
// console.log(`
// --------------Copied Array------
//         ${temparr2}
// `);
// let temparr3=course.slice();
// console.log(`
// --------------Copied Array------
//         ${temparr3}
// `);


//map
//element by element operation is done by map 
let arr:number[]=[2,3,4,5,6];

// let sqrArray=arr.map((value)=>{
//     return (value*value);
// });
// console.log(arr);
// console.log(sqrArray);

let arr1=arr.map((v,i)=>{
    if((i==2) || (i==4)){
        return (v*v);
    }
});
console.log(arr1);
