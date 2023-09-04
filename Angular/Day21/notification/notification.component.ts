import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  dataNotification:string='';
  constructor(private notifications:NotificationService) { }

  ngOnInit(): void {
    this.getNotificationData();
  }

  getNotificationData(){
    this.notifications.notify
    .subscribe((data)=>{
        this.dataNotification=data;
    })
  }

}
