import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

const myRoute:Routes=[
  {
    path:"add",
    component:AddproductComponent
  },
  {
    path:"view",
    component:ViewproductComponent
  },
  {
    path:"",
    component:NavbarComponent
  }
  ]
@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    ViewproductComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
