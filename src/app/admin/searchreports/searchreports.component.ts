import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import {Icourse} from 'src/app/icourse';
import { QuestionService} from 'src/app/question.service';
import {ISearch } from 'src/app/isearch';
import {IReport} from 'src/app/ireport';
import {IUser} from 'src/app/iuser';
import {UserserviceService} from 'src/app/userservice.service';
import {Report} from 'src/app/report';

@Component({
  selector: 'app-searchreports',
  templateUrl: './searchreports.component.html',
  styleUrls: ['./searchreports.component.css']
})
export class SearchreportsComponent implements OnInit {
  

  courses : Icourse[] = [];
  Courseid: number;
  Userid:number;
  State:String;
  City:String;
  Minimum_marks:string;

  users:IUser[]=[];
  
  Reports :Report ={
    State:null,
    City:null,
    Course_name:null,
    Minimum_marks:null,
}

  
  
  
  


constructor(private route: Router,private router:ActivatedRoute,private questionserv:QuestionService,
  private userserv:UserserviceService) { }

  // saveQuestion(Que:IQuestion)
  //   {
      
  //     this.questionserv.AddQuestion(Que).subscribe((data)=>{
  //       if(data)
  //       {
  //         console.log(data," Updated Successfully");
  //         alert("Question Added");
  //       }
  //     });
  //   }
  students:any = []; 
  ViewResult(Repo:Report)
  {
    this.questionserv.ViewResult(Repo).subscribe((data)=>{
            if(data)
            {
              
              console.log(data);
              this.students = data;
             
              
              
              
              
              
            }
          });
  }


  
  ngOnInit(): void {
    this.questionserv.getcourses().subscribe((data: Icourse[])=>{
      
        this.courses = data;
    })  
    this.userserv.getUsers().subscribe((data: IUser[])=>{
    
        this.users = data;
    }) 
  }


}
