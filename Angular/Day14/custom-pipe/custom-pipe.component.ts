import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  strdetails:string='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur excepturi pariatur odit quidem odio, ducimus error magnam earum perspiciatis consectetur molestiae non eaque! Illum sapiente deserunt id repudiandae placeat voluptates.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur excepturi pariatur odit quidem odio, ducimus error magnam earum perspiciatis consectetur molestiae non eaque! Illum sapiente deserunt id repudiandae placeat voluptates.';
  constructor() { }

  ngOnInit(): void {
  }

}
