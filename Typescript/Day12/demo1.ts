
export class Myclass{

    public id:number;
    private fname:string;
    protected lname:string;
   
    constructor(id:number,f:string,lname:string){
        console.log("Constr is called");
        this.id=id;
        this.fname=f;
        this.lname=lname;

    }
    
    display(){
        console.log(`
            ID         :: ${this.id}
            First Name :: ${this.fname}
            Last Name  :: ${this.lname}
        `)
    }


}

// let obj=new Myclass(9,"Sumit",'Raokhande');
// obj.display();

export function add(a:number,b:number):number{
    return (a+b);
}

export const pi=3.14;