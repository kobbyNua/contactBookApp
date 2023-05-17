import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewContactComponent } from './new-contact/new-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import {Routes,RouterModule, provideRouter, withComponentInputBinding} from "@angular/router";
import { ContactBookComponent } from './contact-book/contact-book.component';

@NgModule({
  declarations: [
    AppComponent,
    NewContactComponent,
    EditContactComponent,
    ContactBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,

    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
