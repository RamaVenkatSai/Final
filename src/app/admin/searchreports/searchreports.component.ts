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

  users:IUser[]=[];
  
    
  Userid:number;
  State:String;
  City:String;
  Minimum_marks:string;

  
  
  


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
  ViewResult(Courseid,State,City,Minimum_marks)
  {
    this.questionserv.ViewResult(Courseid,State,City,Minimum_marks).subscribe((data)=>{
            if(data)
            {
              console.log(this.questionserv.ViewResult(Courseid,State,City,Minimum_marks));
              console.log(data);
              
             
              
              
              
              
              
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
