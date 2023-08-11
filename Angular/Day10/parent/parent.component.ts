import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  strdata:string='Sumit Raokhande';
  jsonObj={
    id:9,
    fname:'Sumit',
    lname:'Raokhande'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
