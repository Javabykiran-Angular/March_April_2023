import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuild-pipe',
  templateUrl: './inbuild-pipe.component.html',
  styleUrls: ['./inbuild-pipe.component.css']
})
export class InbuildPipeComponent implements OnInit {

  strDetails:string='U are Learn Angular 12 from sumit Raokhande trainer';
  num2:number=-452.78956324557;
  mydate=new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
