// type assertion
// it tells to typescript compiler to convert a specific data type 
// it works on any/Object/Unknwon
//1 Angle bracket syntax => it can be used in typescript file 
//2 as syntax => it can be used in ts as well as html file 
//1 Angle bracket syntax
// var a:any;
// var temp=(<string>a);
// temp.
//2 as syntax 
// var a:any;
// let temp=(a as string);
// temp.
// Operators
// Airthmathic => +,-,*,/,%
//logical => &&,||
//bitwise => &,|,~,!,>>,<<,^
// relational => >,<,<=,>=,!=
//ternary  => condition?expression1:expression2
//conditional => ==(it checks only value ) , ===(Strongly equality => it checks value as well as data type )
//unary => inc/dec post/pre ++a,a--
//assignment => =,+=,-=,*=,/=,%=
//control/sequential statement
// if,if-else,switch,break,continue,nested if-else
var a = 21;
// if(a<4){
//     console.log('Condition is true');
// }else{
//     console.log('Condition is false');
// }
var choice = 21;
// switch(choice){
//     case 1:console.log("U r in case 1");
//             break;
//     case 2: console.log("U r in case 2");
//             break;
//     default: console.log("U r in default case");
//             break;
// }
// loop statement
// for , while,do-while,foreach
var count = 5;
// while(count!=0){
//     console.log("Count is "+count);
//     count--;
// }
// do{
//     console.log("-----Count is "+count);
//     count--;
// }while(count!=0);
//for 
// for(var i=0;i<4;i++){
//     console.log("Value of i is "+i);
// }
// console.log("After the loop i is "+i);
//var => scope is global => it store in data segment 
// let => it is keyword => it store in stack segment
// we use to create a variable 
// scope => its nearest block => {}/file block
// for(let i=0;i<4;i++){
//     console.log("=====Value of i is "+i);
// }
// console.log("After loop i is "+i)
// const => it is a keyword
// it is used to create a variable 
// u can't change variable value once u assign 
// scope => global as well as local 
var pi = 3.14;
console.log(pi);
