import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  count:number=0;
  class1:string='myimg1';
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    if(this.count==0){
    console.log("Click Event Occur..");
    this.count++;
    }    
  }
  onImageClick(){
    console.log('on Image Click')
  }

  onImgClick(){
    this.class1='myimg2';
  }


}
