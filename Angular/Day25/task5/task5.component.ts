import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css']
})
export class Task5Component implements OnInit {
  empData:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(myid:any,myname:string,mysalary:any){

    let obj={
      id:myid,
      name:myname,
      sal:mysalary
    }

    this.empData.push(obj);
  }

  onRemove(index:any){
      this.empData.splice(index,1);
      
  }

}
