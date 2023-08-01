import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {

  mycolor:string='blue';
  rating:number=20;

  jsonObj={
    // color: 'orange',
    color: this.rating<10?'orange':'red',
    fontSize:'40px',
    'font-style':"italic",
    fontFamily : "Cambria"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
