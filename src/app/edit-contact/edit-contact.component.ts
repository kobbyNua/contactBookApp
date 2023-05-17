import { Component } from '@angular/core';
import {AppicallsService} from '../appicalls.service';
import { ActivatedRoute } from '@angular/router';
import {faUserCircle,faUser,faHome,faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent {
         
          personContact:any;
          faUserCircle=faUserCircle;
          faUser=faUser;
          faHome=faHome;
          faPhoneAlt=faPhoneAlt
          telephone:any;
          first_name:any;
          last_name:any;
          update_first_name:any;
          update_last_name:any;
          id:any;
          message:any;
         constructor(private apis:AppicallsService,private route:ActivatedRoute,private router:Router){
          //this.personContact={id:-1,first_name:"",last_name:" ",telephone:""}  
         }
         ngOnInit(){
             this.route.paramMap.subscribe(params=>{this.contactDetail(params.get('id'))})
         }

         contactDetail=(id:any)=>{
          
          this.apis.getContactDetails(id).subscribe(
          
            data=>{
           
              
              this.first_name = data.first_name
              this.last_name = data.last_name
              this.telephone = data.telephone
              this.id=data.id
              console.log(data)
           
            },
            
         )

      }
      editContactDetails(editForms:NgForm){
        const contact_id=editForms.value.id
        const details={id:editForms.value.id,first_name:editForms.value.first_name,last_name:editForms.value.last_name,telephone:editForms.value.telephone}
        this.apis.updateContactDetail(details).subscribe(
           data=>{
            /*this.update_first_name=data.first_name;this.update_last_name=data.last_name;*/this.message="contact updated successfully";console.log(data)
            if (editForms.submitted){
                this.router.navigate(["/"])
            }
          })
      }
        /*personContact:any
        constructor(private apis:AppicallsService){}

        
        contactDetail=(id:any)=>{
          
          this.apis.getContactDetails(id).subscribe(
          
            data=>{
              this.personContact=data
           
            },
            
            )
       }*/

}
