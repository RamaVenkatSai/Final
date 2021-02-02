import { Component, OnInit } from '@angular/core';
import { QuestionService} from 'src/app/question.service';
import { Searchstudent } from 'src/app/searchstudent';

@Component({
  selector: 'app-displayreports',
  templateUrl: './displayreports.component.html',
  styleUrls: ['./displayreports.component.css']
})
export class DisplayreportsComponent implements OnInit {

  

  constructor(public service:QuestionService) { }
  Students:any = []; 
  
  ngOnInit(): void {
   
  
  } 
  
}
