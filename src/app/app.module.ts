import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddquestionComponent } from './admin/addquestion/addquestion.component';
import { RemovequestionComponent } from './admin/removequestion/removequestion.component';
import { DisplayquestionComponent } from './admin/displayquestion/displayquestion.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminpageComponent } from './admin/adminpage/adminpage.component';
import { ViewQuestionsComponent } from './admin/view-questions/view-questions.component';
import { SearchreportsComponent } from './admin/searchreports/searchreports.component';
import { RegisteruserComponent } from './user/registeruser/registeruser.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { DisplayreportsComponent } from './admin/displayreports/displayreports.component';

@NgModule({
  declarations: [
    AppComponent,
    AddquestionComponent,
    RemovequestionComponent,
    DisplayquestionComponent,
    HomepageComponent,
    AboutusComponent,
    AdminloginComponent,
    AdminpageComponent,
    ViewQuestionsComponent,
    SearchreportsComponent,
    RegisteruserComponent,
    UserloginComponent,
    DisplayreportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
