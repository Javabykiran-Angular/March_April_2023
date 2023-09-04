import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

     myjson={
        id:0,
        fname:'',
        status:''
    }

    dataReceived:string='';

  constructor(private route:ActivatedRoute,
              private notification:NotificationService) { }

  ngOnInit(): void {
    this.KuchBhi();
    this.getNotificationData();
  }

  getNotificationData(){
      this.notification.notify
      .subscribe((data)=>{
        this.dataReceived=data;
      })
  }

  KuchBhi(){
      this.route.queryParamMap
      .subscribe((param:any)=>{
        this.myjson.id=+param.get("id");
        this.myjson.fname=param.get("fname");
        this.myjson.status=param.get("status");
      })
  }

  onSend(msg:string){
      this.notification.sendMessage(msg);
  }

}
