import { Component } from '@angular/core';
import {AppicallsService} from './appicalls.service';
import {faTrash,faUserCircle,faContactBook, faPencilAlt} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-contact-app';
  contact_lists:any;
  search:any;
  faTrash=faTrash;
  faUserCircle=faUserCircle
  faContactBook=faContactBook
  faPencilAlt=faPencilAlt


  personContact:any
  constructor(private apis:AppicallsService){
     this.contactsView()
     this.personContact={id:-1,first_name:"",last_name:" ",telephone:""}
  }

  contactsView=()=>{
          this.apis.viewallContact().subscribe(
              data=>{this.contact_lists=data},
              data=>{console.warn(data)}
          )
  }
  contactDetail=(contact:any)=>{
          
          this.apis.getContactDetails(contact.id).subscribe(
          
            data=>{
              this.personContact=data
           
            },
            
            )
  }

  updateContact=()=>{
     this.apis.updateContactDetail(this.personContact).subscribe(data=>{this.contactsView()})
  }
  newContact=()=>{
     this.apis.createContact(this.personContact).subscribe(data=>{this.contact_lists.push(data)})
  }

  seacrhContact=()=>{
     this.apis.contactSearch(this.search).subscribe(data=>{this.contactsView()})
  }

  deleteContact=(contact:any)=>{
    this.apis.deleteContact(contact.id).subscribe(data=>{this.contactsView()})
  }
}
