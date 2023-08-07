import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding3',
  templateUrl: './eventbinding3.component.html',
  styleUrls: ['./eventbinding3.component.css']
})
export class Eventbinding3Component implements OnInit {

  result:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  onAddition(num1:any,num2:any){
    //this.result=num1+num2;
    let n1=+num1;
    let n2=+num2;
    this.result=n1+n2;


  }

  onChange(username:any){
    console.log("Change Event Occur..");
    console.log(username.value)

  }

  onKeyUp(){
    console.log("Key up Event Occur");
  }

  onKeyDown(){
    console.log("Key Down Event Occur"); 
  }

  onEnterPressed(){
    console.log("Enter key is Pressed & realsed")
  }

}
