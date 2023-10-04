import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // baseUrl:string="http://localhost:8080/api/"
  baseUrl:string=environment.baseUrl;

  constructor(private http:HttpClient) { }

  login(obj:any){
    return (this.http.post(`${this.baseUrl}login`,obj));
  }

  getAllEmployee(){
    return (this.http.get(`${this.baseUrl}getallemployee`));
  }

  getRecordById(id:any){
        return (this.http.get(`${this.baseUrl}getemployeebyid/${id}`))
  }

  getAllCountry(){
    return (this.http.get(`${this.baseUrl}getallcountry`));
  }

  saveRecord(obj:any){
      return (this.http.post(`${this.baseUrl}addemployee`,obj,{
        responseType:'text'
      }));
  }

  UpdateRecord(obj:any){
   return  (this.http.put(`${this.baseUrl}updateemployee`,obj,{
      responseType:'text'
    }));
  }

  deleteRecord(id:any){
   return (this.http.delete(`${this.baseUrl}deleteemployee/${id}`,{
      responseType:'text'
    }));
  }

  imageUpload(file:File){
    let formData=new FormData();
    formData.append('file',file,file.name)
    let headers = new HttpHeaders();
    headers.append('Content-Type','image');
    return (this.http.post(`${this.baseUrl}uploadImageFile`,formData,{headers:headers}));
  }

}
