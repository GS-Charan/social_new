import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';	
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
	  
   }
   sendData(data:any):Observable<any>
   {
	   return this.http.post('http://localhost:8080/api/name/send',  data,{responseType: 'text'});
	   
   }
}
