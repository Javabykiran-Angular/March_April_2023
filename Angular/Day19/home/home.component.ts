import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myid:number=9;
  myusername:string='Sumit-Raokhande';
  
  jsonObj={
    id:9,
    fname:'Sumit',
    status:'Active'
  }

  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  onPage1(){
      this.router.navigate(['/Page1']);
  }

  onPage2(){
    this.router.navigate(['/Page2',this.myid]);
  }

  onPage3(){
    this.myid=8;
    this.myusername='Raokhande';
    this.router.navigate(['/Page3',this.myid,this.myusername])
  }

  onFollower(){
    this.router.navigate(['/Follower']);
  }

  onQueryParam(){
    this.router.navigate(['/QueryParameter'],{
      queryParams:this.jsonObj
    })
  }

}
