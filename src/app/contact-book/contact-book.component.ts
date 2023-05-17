import { Component } from '@angular/core';
import {AppicallsService} from '../appicalls.service';
import {faTrash,faUserCircle,faContactBook, faPencilAlt,faUser, faRefresh} from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-contact-book',
  templateUrl: './contact-book.component.html',
  styleUrls: ['./contact-book.component.css']

})
export class ContactBookComponent {

       contact_lists:any;
       faTrash=faTrash;
       faUserCircle=faUserCircle
       faContactBook=faContactBook
       faPencilAlt=faPencilAlt
       faUser=faUser
       faRefresh=faRefresh
       personContact:any
       
       constructor(private apis:AppicallsService){
        this.contactsView()
        this.personContact={id:-1,first_name:"",last_name:" ",telephone:""}
       }

       contactsView=()=>{
           this.apis.viewallContact().subscribe(
              data=>{this.contact_lists=data}
             // data=>{console.warn(data)}
            )
       }

       contactDetail=(contact:any)=>{
          
              this.apis.getContactDetails(contact.id).subscribe(
        
               data=>{
                  this.personContact=data
         
                },
          
              )
       }
       searchContact=(search:any)=>{
        console.log(search.control.value)
        this.apis.contactSearch(search.control.value).subscribe(data=>{this.contact_lists=data})
      }
       deleteContact=(id:any)=>{
             this.apis.deleteContact(id).subscribe(data=>{this.contactsView()})
           
       }


       
}
