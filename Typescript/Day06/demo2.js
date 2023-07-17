//anonymous functions
// function does not have any name 
// it execute the logic there itself 
var temp1 = function () {
    console.log("anonymous functions is called ");
};
// temp1();
var temp2 = function (a, b) {
    return (a + b);
};
var res = temp2(5, 4);
// console.log("result is "+res);
//fat arrow/Arrow functions 
//function does not have any name 
var temp3 = function () {
    console.log("fat arrow function is called");
};
// temp3();
var temp4 = function (a, b) {
    return (a + b);
};
// temp4(20,2)
// console.log("Addition is "+temp4(20,2));
//optional parameter functions
function add1(a, b) {
    console.log("Value of a is " + a); //10
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); //NAN=> not a number 
}
// add1(10);
// add1(10,20);
function add2(a, b) {
    console.log("Value of a is " + a); //10
    console.log("Value of b is " + b); //undefined
    console.log("Addition of a+b is " + (a + b)); //NAN=> not a number 
}
// add2();
// add2(30);
// add2(30,20);
// add2(,45)
//default parameter functions
function add3(a, b) {
    if (b === void 0) { b = 6; }
    console.log("Value of a is " + a); //10
    // b=70;
    console.log("Value of b is " + b); //6
    console.log("Addition of a+b is " + (a + b)); //16 
}
// add3(10)
// add3(10,50);
function add4(a, b) {
    if (a === void 0) { a = 10; }
    console.log("Value of a is " + a); //10
    console.log("Value of b is " + b); //6
    console.log("Addition of a+b is " + (a + b)); //16 
}
// add4(2,56);
function add5(a, b) {
    if (a === void 0) { a = 10; }
    console.log("Value of a is " + a); //10      
    console.log("Value of b is " + b); //6
    console.log("Addition of a+b is " + (a + b)); //16 
}
add5();
