import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import { NumberOnlyDirective } from './directives/number-only.directive';

@NgModule({
  declarations: [AppComponent, ContactComponent, ContactDetailComponent, NumberOnlyDirective],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
