import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RemovequestionComponent } from './admin/removequestion/removequestion.component';
import{AddquestionComponent} from './admin/addquestion/addquestion.component';
import{DisplayquestionComponent} from './admin/displayquestion/displayquestion.component';
import{HomepageComponent} from './homepage/homepage.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import {AdminpageComponent } from './admin/adminpage/adminpage.component';
import {ViewQuestionsComponent} from './admin/view-questions/view-questions.component';
import { SearchreportsComponent } from './admin/searchreports/searchreports.component';
import { RegisteruserComponent } from './user/registeruser/registeruser.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import {DisplayreportsComponent} from "./admin/displayreports/displayreports.component";



const routes: Routes = [
  {path:'remove',component:RemovequestionComponent},
  {path:'add',component:AddquestionComponent},
  {path:'',component:SearchreportsComponent},
  {path:"displayreports",component:DisplayreportsComponent},
  {path:"AdminLogin",component:AdminloginComponent},
  {path:"AdminPage",component:AdminpageComponent},
  {path:"UserLogin",component:UserloginComponent},
  {path:"ViewQuestions",component:DisplayquestionComponent},
  {path:'display',component:DisplayquestionComponent},
  {path:'registeruser',component:RegisteruserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
   ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[RemovequestionComponent,AddquestionComponent,HomepageComponent,DisplayquestionComponent];
