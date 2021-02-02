import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import {IQuestion} from 'src/app/iquestion';
import { QuestionService} from 'src/app/question.service';
import {Icourse} from 'src/app/icourse';


@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {
  courses : Icourse[] = [];
  Courseid: number;

  Question:IQuestion={
    Question_id:null,
    Course_id:null,
    Level_id:null,
    Question_No:null,
    Question1:null,
    Option_1:null,
    Option_2:null,
    Option_3:null,
    Option_4:null,    
    Correct_Answer:null,    
    }
  constructor(private questionserv:QuestionService,
    private router: Router,private route:ActivatedRoute) { }
    saveQuestion(Que:IQuestion)
    {
      
      this.questionserv.AddQuestion(Que).subscribe((data)=>{
        if(data)
        {
          console.log(data," Updated Successfully");
          alert("Question Added");
        }
      });
    }

  ngOnInit(): void {
    console.log("venky");
    this.questionserv.getcourses().subscribe((data: Icourse[])=>{
      console.log(data);
        this.courses = data;
    })  
  }

}
