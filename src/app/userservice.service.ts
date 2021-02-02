import { Userlogin } from './userlogin';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from"@angular/common/http";
import { Observable, throwError } from'rxjs';
import { catchError } from'rxjs/operators';
import { IUser } from './iuser';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpClient: HttpClient) { }
  private apiServer = "http://localhost:65205/api";
httpOptions = {
headers: new HttpHeaders({
'Content-Type': 'application/json'
 })
 }
 Userlogin(logincredentials): Observable<number> {
  return this.httpClient.post<number>(this.apiServer + '/User_Module/',JSON.stringify(logincredentials),this.httpOptions);
 }

 getUsers():Observable<IUser[]>{
  return this.httpClient.get<IUser[]>(this.apiServer +"/User_Module");
}
}