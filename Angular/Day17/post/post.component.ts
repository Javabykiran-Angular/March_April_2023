import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  id:number=0;
  title:string='';
  body:string='';
  posts:any[]=[];
  isHiddden:boolean=true;

  constructor(private service:HttpService) { }

  ngOnInit(): void {
    this.GetPost();
  }

  GetPost(){
      this.service.getPost()
      .subscribe((response:any)=>{
        console.log(response);
        this.posts=response;
      },(error)=>{
        // alert("Error Occured...")
        if(error.status>=400 || error<=499){
          alert("Error Occured... Client side "+error.status)
        }else if(error.status>=500 || error<=599){
          alert("Error Occured... Server side "+error.status);
        }else{
          alert("Something is wrong....!!!")
        }
      })
  }

  onSend(mytitle:any,mybody:any){

    let jsonObj={
      title:mytitle,
      body:mybody
    }

    this.service.postData(jsonObj)
    .subscribe((resposne)=>{
      console.log(resposne);
    })

  }

  onEdit(item:any){
      console.log(item);
      this.id=item.id;
      this.title=item.title;
      this.body=item.body;
      this.isHiddden=false;
  }

  onUpdate(){
    let obj={
      id:this.id,
      title:this.title,
      body:this.body
    }

    this.service.Updatedata(obj)
    .subscribe((response)=>{
      console.log(response);
      this.isHiddden=true;
    })

  }

  

  onDelete(id:any){
    this.service.DeleteData(id)
    .subscribe((response)=>{
      console.log(response)
    })
  }

}
