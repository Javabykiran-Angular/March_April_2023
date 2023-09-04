import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  // notify=new Subject<string>();
  notify=new BehaviorSubject<string>("welcome");

  constructor() { }


  sendMessage(msg:string){
    this.notify.next(msg);
  }

}
