import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './component/customer-list/customer-list.component';

import {HttpClientModule} from '@angular/common/http';
import { CustomerSaveComponent } from './component/customer-save/customer-save.component';

import { FormsModule } from '@angular/forms';
import { CustomerEditComponent } from './component/customer-edit/customer-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerSaveComponent,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
