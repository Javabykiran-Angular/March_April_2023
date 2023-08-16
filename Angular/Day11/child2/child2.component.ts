import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Output() childStrEvent=new EventEmitter();

  @Output() childArrObjEvent=new EventEmitter();

   @Output() childDateEvent=new EventEmitter();

  childstrData:string='Data from child....';

  arrObj=[
    {
      name:'One Plus',
      price:45000,
      qty:1
    },
    {
      name:'Realme',
      price:18000,
      qty:1
    },
    {
      name:'Samsung',
      price:25000,
      qty:2
    },
    {
      name:'Motorolla',
      price:30000,
      qty:1
    },
    {
      name:'Vivo',
      price:12000,
      qty:1
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

  onSend(){
    this.childStrEvent.emit(this.childstrData);

    this.childArrObjEvent.emit(this.arrObj);

  }

  onDateSend(mydate:any){
      this.childDateEvent.emit(mydate);
  }

}
