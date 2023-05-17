import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactBookComponent } from './contact-book/contact-book.component';
import {EditContactComponent} from './edit-contact/edit-contact.component';
import { NewContactComponent } from './new-contact/new-contact.component';
const routes: Routes = [
  {path:"",redirectTo:'/contact-book',pathMatch:'full'},
  {path:"contact-book",component:ContactBookComponent},
  {path:"edit-contact/:id",component:EditContactComponent},
  {path:"new-contact",component:NewContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
