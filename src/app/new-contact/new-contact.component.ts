import { Component } from '@angular/core';
import {faUserCircle,faUser,faHome,faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import { AppicallsService } from '../appicalls.service';
import { PersonContacts } from '../persons';
import { NgForm } from '@angular/forms';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent {

     
     personContact:any;
     faUserCircle=faUserCircle;
     faUser=faUser;
     faHome=faHome;
     faPhoneAlt=faPhoneAlt;
     first_name:any;
     last_name:any;
     message:any;
     //newContact:PersonContacts={first_name:this.first_name,last_name:this.last_name,telephone:this.telephone}


     constructor(private apis:AppicallsService,private router:Router){}

     createNewContact=(myForms:NgForm)=>{
             const newContact={first_name:myForms.value.first_name,last_name:myForms.value.last_name,telephone:myForms.value.telephone}
             console.log(myForms)
             
            
               this.apis.createContact(newContact).subscribe(data=>{this.first_name=data.first_name;this.last_name=data.last_name;this.message="contact added successfully "})
               if(myForms.submitted){
                    this.router.navigate(['/'])
                }
            //console.log("hello")
     }
     inputValidation=(elements:NgForm)=>{
         console.log(elements)
     }


}
