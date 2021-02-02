import { Adminlogin } from './adminlogin';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from"@angular/common/http";
import { Observable, throwError } from'rxjs';
import { catchError } from'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private httpClient: HttpClient) { }
url3='http://localhost:65205/api';
httpOptions = {
headers: new HttpHeaders({
'Content-Type': 'application/json'
 })
 }
 AdminLogin(logincredentials): Observable<number> {debugger;
  return this.httpClient.post<number>(this.url3 + '/Admin_Module',JSON.stringify(logincredentials),this.httpOptions);
 }
}


