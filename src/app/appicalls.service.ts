import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppicallsService {

  base_url="http://127.0.0.1:8000/contact-list/"
  httpHeaders=new HttpHeaders({'Content-Type':'application/json'})
  constructor(private http:HttpClient) { }
   
  viewallContact=()=>{
    return this.http.get(this.base_url,{headers:this.httpHeaders})
  }

  getContactDetails(id:any):Observable<any>{
    return this.http.get(this.base_url+'view-contact-details/'+id,{headers:this.httpHeaders})
  }
  updateContactDetail=(contact:any):Observable<any>=>{
      const body={first_name:contact.first_name,last_name:contact.last_name,telephone:contact.telephone}
      return this.http.post(this.base_url+'update-contact/'+contact.id,body,{headers:this.httpHeaders})
   }
   createContact=(contact:any):Observable<any>=>{
       const body={first_name:contact.first_name,last_name:contact.last_name,telephone:contact.telephone}
       return this.http.post(this.base_url+"create-contact",body,{headers:this.httpHeaders})
   }
   deleteContact=(id:any)=>{
      return this.http.delete(this.base_url+'delete-contact/'+id,{headers:this.httpHeaders})
   }
   contactSearch=(search:any)=>{
       
       return this.http.post(this.base_url+"contact-search/"+search,{headers:this.httpHeaders})
   }
}
