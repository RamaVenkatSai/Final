import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {from, Observable,of} from 'rxjs';
import {Icourse} from 'src/app/icourse';
import {IQuestion} from './iquestion';
import { IUser } from './iuser';
import { Searchstudent } from './searchstudent';
import{Report} from 'src/app/report' ;
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  url='http://localhost:65205/api/Questions';
  url2='http://localhost:65205/api';
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})

};
    constructor(private http:HttpClient) { }

    getAll():Observable<IQuestion[]>{

      return this.http.get<IQuestion[]>(this.url);
      
      
    }
    GetQuestion(id:number,level:number):Observable<IQuestion[]>
    {
      return this.http.get<IQuestion[]>(this.url+"getquestion?id="+id +"&level="+level);
    }
    deleteQuestion(id:number):Observable<IQuestion>{
      return this.http.delete<IQuestion>(this.url+"?id="+id);
      
      
    }
    getcourses():Observable<Icourse[]>{
      return this.http.get<Icourse[]>(this.url2 +"/courses");
    }​​​​

    AddQuestion(que:IQuestion):Observable<IQuestion>{
      return this.http.post<IQuestion>(this.url+"/postquestion",que,this.httpOptions);
  }

  ViewResult(Courseid,State,City,Minimum_marks):Observable<Searchstudent[]>{

    return this.http.get<Searchstudent[]>(this.url2+"/Reports?"+"state="+State+"&city="+City+"&Course_name="+Courseid+"&Minimum_marks=18");
  
  }

   

  }