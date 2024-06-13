import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';	
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) {
	  
   }
   sendData(data:any):Observable<any>
   {
	   return this.http.post('http://localhost:8080/api/name/send',  data,{responseType: 'json'});
	   
   }
   
   recieveData():Observable<any>
   {
	   return this.http.get('http://localhost:8080/api/names/fetchAll');
	   
   }
   
     login(credentials): Observable<any> {
    return this.http.post('http://localhost:8080/api/auth/signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post('http://localhost:8080/api/auth/signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}
