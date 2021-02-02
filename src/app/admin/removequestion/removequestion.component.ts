import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import {IQuestion} from 'src/app/iquestion';
import { QuestionService} from 'src/app/question.service';



@Component({
  selector: 'app-removequestion',
  templateUrl: './removequestion.component.html',
  styleUrls: ['./removequestion.component.css']
})
export class RemovequestionComponent implements OnInit {
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
    private route: Router,private router:ActivatedRoute) { }

    deleteQuestion(Question_id){
      
      this.questionserv.deleteQuestion(Question_id).subscribe(data=>{
                
          alert("Question deleted");
        
      });
    }

  ngOnInit(): void {
  }

}
