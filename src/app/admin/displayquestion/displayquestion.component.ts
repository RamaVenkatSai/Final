import { Component, OnInit } from '@angular/core';

import {IQuestion} from 'src/app/iquestion';
import { QuestionService} from 'src/app/question.service';


@Component({
  selector: 'app-displayquestion',
  templateUrl: './displayquestion.component.html',
  styleUrls: ['./displayquestion.component.css']
})
export class DisplayquestionComponent implements OnInit {
 
  constructor(public service:QuestionService) { }
  Questions:any = []; 
  ngOnInit(): void {
    this.service.getAll().subscribe((data)=>{
      this.Questions = data;
  })  
  }
  deleteQuestion(Question_id){
      
    this.service.deleteQuestion(Question_id).subscribe(data=>{
              
        alert("Question deleted");
      
    });
  }
}

