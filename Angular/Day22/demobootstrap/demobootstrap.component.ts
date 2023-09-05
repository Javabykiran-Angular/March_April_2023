import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demobootstrap',
  templateUrl: './demobootstrap.component.html',
  styleUrls: ['./demobootstrap.component.css']
})
export class DemobootstrapComponent implements OnInit {

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

}
