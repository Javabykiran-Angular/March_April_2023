import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../utility/employee';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {
  allCountry:any[]=[];
  issubmitDissabled:boolean=true;
  backendResponse:string='';
  @Input() parentdata:any=<Employee>{};
  constructor(private service:HttpService) { }

  ngOnInit(): void {
    this.GetAllCountry()
  }

  GetAllCountry(){
      this.service.getAllCountry()
      .subscribe((response:any)=>{
        this.allCountry=response;
      })
  }

  onUpdate(){
    
    this.parentdata.updateddtm=Date.now();
    this.parentdata.updatedby=sessionStorage.getItem("username");
    this.service.UpdateRecord(this.parentdata)
    .subscribe((response)=>{
      // console.log(response)
      this.issubmitDissabled=false;
      this.backendResponse=response;
    })
  }

}
