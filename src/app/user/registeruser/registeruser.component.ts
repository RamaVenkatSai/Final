import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import{ UserService} from 'src/app/user.service';
import {IUser} from 'src/app/iuser';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent implements OnInit {
  user:IUser=
  {
    User_id:null,
    Email:null,
    Password:null,
    Fullname:null,
    Secondname:null,
    Date_of_Birth:null,
    Phone_no:null,
    City:null,
    State:null,
    Qualification:null,
    Year_Of_Passing:null};

  constructor(private userservice:UserService,private route: Router) { }
  saveUser(user:IUser){debugger;​​​​    
    this.userservice.addUser(this.user).subscribe(()=>
    {​​​​      
      alert("Record Added");     
     this.route.navigate(['/']);   
   }​​​​,error=>{
    alert(error.Message);
   }); 
 }​​​​

  ngOnInit(): void {
  }

}