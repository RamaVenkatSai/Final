import { Adminlogin } from 'src/app/adminlogin';
import { UserserviceService } from 'src/app/userservice.service';
import { Userlogin } from 'src/app/userlogin';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  cred: Userlogin= new Userlogin();

  constructor(private regService : UserserviceService) { }

  ngOnInit(): void {
  }
  OnSubmit(){
    this.regService.Userlogin(this.cred).subscribe((data)=>{
      if(data==1)
      {
        alert("Login Successful");
      }
      else{
        alert("Invalid Login");
      }
    })
  }

}