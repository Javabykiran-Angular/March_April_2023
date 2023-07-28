import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stringinterpolation',
  templateUrl: './stringinterpolation.component.html',
  styleUrls: ['./stringinterpolation.component.css']
})
export class StringinterpolationComponent implements OnInit {

  name:string='Sumit raokhande';
  imgUrl:string='../../assets/bg4.jpg';

  role:string='';

  num1:number=4;

  constructor() { }

  getRole(){
    this.role="Angular 12 By Sumit Trainer";
    return (this.role);
  }

  ngOnInit(): void {
  }

}
