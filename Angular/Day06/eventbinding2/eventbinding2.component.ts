import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(myevent:any){
      console.log(myevent);
      console.log("Data is => "+myevent.target.value)

  }

  onSend(mydata:any){
    console.log(mydata);
    console.log(mydata.value);
    mydata.style.background="green";
    mydata.style.color="white";
  }

  onSend1(myvalue:any){
    console.log(myvalue);


  }

}
