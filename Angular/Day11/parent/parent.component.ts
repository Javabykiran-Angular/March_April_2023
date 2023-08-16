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
  
  name:string='';

  childStrdata:string='';
  ChildArrData:any[]=[];
  ChildDate:any='';
  constructor() { }

  ngOnInit(): void {
  }

  onSend(myname:string){
    this.name=myname;
  }

}
