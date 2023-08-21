import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Child3Component } from '../child3/child3.component';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit,AfterViewInit{

  @ViewChild('mydiv') htmlDivElement!:ElementRef;

  @ViewChild(Child3Component) childAccess!:Child3Component;

  constructor() { }

  ngAfterViewInit(): void {
    console.log(this.htmlDivElement);
    this.htmlDivElement.nativeElement.className="mydivclass";
  }

  ngOnInit(): void {
      console.log(this.htmlDivElement);
  }

  onPropertyAccess(){
    this.childAccess.username='Sumit Raokhande';
  }

  onMethodAccess(){
    this.childAccess.onShowAlert();
  }

  onIncrement(){
    this.childAccess.incrementCnt();
  }

  onDecrement(){
    this.childAccess.decremetCnt();
  }

}
