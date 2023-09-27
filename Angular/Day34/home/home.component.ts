import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpService } from '../http.service';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { Employee } from '../utility/employee';
import { DialogService } from '../dialog.service';
import { ToastrService  } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    empData:any[]=[];
    empobj:any=<Employee>{};
    radioSelect:boolean=false;
    modalRef!: BsModalRef;  
    config = {
      animated: true,
      
      ignoreBackdropClick: true,
      class: "alert alert-danger"
    };

    nameSearch:string='';
    p:number=1;

  constructor(private service:HttpService,
              private modalservice:BsModalService,
              private dialogservice:DialogService,
              private toaster:ToastrService) { }

  ngOnInit(): void {
      this.getAlldata();
  }

  getAlldata(){
      this.service.getAllEmployee()
      .subscribe((response:any)=>{
        console.log(response)
        this.empData=response;
      })
  }

  onEdit(item:any){
    // console.log(item)
    this.radioSelect=true;
    this.empobj=item;
  }

  isRadioSelect(){
    if(this.radioSelect)
    return true;
  else
    return false;
  }

  onUpdate(popUp:TemplateRef<any>){
      if(this.isRadioSelect()){
        //update record
         this.modalRef= this.modalservice.show(popUp,this.config);
      }else{
       // alert("Please Select a record to Update..")
       this.toaster.info("Please Select a record to Update..")
      }
  }

  onDelete(){
    if(this.isRadioSelect()){
      //Delete the Record
        this.dialogservice.OpenConfirmDialog('Are you sure to delete this record?')
        .afterClosed()
        .subscribe((res)=>{
          console.log(res)
          if(res){
            //delete record
            this.service.deleteRecord(this.empobj.id)
            .subscribe((response)=>{
             // console.log(response);
             this.toaster.success(response);
              this.getAlldata();
            })
          }
        })
    }else{
      //alert("Please Select a record to Delete..")
      this.toaster.error("Please Select a record to Delete..");
    }
  }


}
