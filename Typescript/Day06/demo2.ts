//anonymous functions
// function does not have any name 
// it execute the logic there itself 

let temp1=function (){
    console.log("anonymous functions is called ");
}

// temp1();

let temp2=function (a:number,b:number):number{
    return (a+b);
}

let res=temp2(5,4);
// console.log("result is "+res);

//fat arrow/Arrow functions 
//function does not have any name 

   let temp3= ()=>{
        console.log("fat arrow function is called");
    }

    // temp3();

    let temp4=(a:number,b:number):number=>{
        return (a+b);
    }

    // temp4(20,2)
    // console.log("Addition is "+temp4(20,2));

    //optional parameter functions

    function add1(a:number,b?:number){
        console.log("Value of a is "+a);//10
        console.log("Value of b is "+b);//undefined
        console.log("Addition of a+b is "+(a+b!));//NAN=> not a number 
    }
    
    // add1(10);
    // add1(10,20);


    function add2(a?:number,b?:number){
        console.log("Value of a is "+a);//10
        console.log("Value of b is "+b);//undefined
        console.log("Addition of a+b is "+(a!+b!));//NAN=> not a number 
    }
    // add2();
    // add2(30);
    // add2(30,20);
    // add2(,45)

    //default parameter functions
    function add3(a:number,b:number=6){
        console.log("Value of a is "+a);//10
        // b=70;
        console.log("Value of b is "+b);//6
        console.log("Addition of a+b is "+(a+b));//16 
    }

    // add3(10)
    // add3(10,50);

    function add4(a:number=10,b:number){
        console.log("Value of a is "+a);//10
      
        console.log("Value of b is "+b);//6
        console.log("Addition of a+b is "+(a+b));//16 
    }

    // add4(2,56);

    function add5(a:number=10,b?:number){
        console.log("Value of a is "+a);//10      
        console.log("Value of b is "+b);//6
        console.log("Addition of a+b is "+(a+b!));//16 
    }

    // add5();