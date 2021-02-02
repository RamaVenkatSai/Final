import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'; 
import {Observable,of} from 'rxjs';
import {IUser} from './iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private apiserver= 'http://localhost:65205/api';
  httpOptions={
    headers:new HttpHeaders({'Content-Type':'application/json'})
};

  constructor(private http:HttpClient) { }
  addUser(user:IUser):Observable<IUser>{​​​​debugger;  
    return this.http.post<IUser>(this.apiserver+ "/UserReg/",JSON.stringify(user),this.httpOptions);
  }​​​​
  
}

 