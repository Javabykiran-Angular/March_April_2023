import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=["Core java",'Adavnced Java','Spring Boot','JSP','Angular 12','AWS','Jenkings','Docker'];

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

  highlight:string='';

  constructor() { }

  ngOnInit(): void {
  }

  onMouseover(item:any){
    // console.log("========= Mouse Over Event Occur=======")
    console.log(item);
    this.highlight=item.name;
  }

  onMouseOut(){
    console.log("--mouse out event occur--")
    this.highlight='';
  }

}
