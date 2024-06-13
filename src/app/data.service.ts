import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private authToken: string | null = null;
  private httpOptionsAuth: { headers: HttpHeaders } | null = null;

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) {
    this.initializeService();
  }

  private initializeService() {
    this.authToken = this.tokenStorageService.getToken();
    this.httpOptionsAuth = this.authToken
      ? {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.authToken}`
          })
        }
      : null;
  }

  sendData(data: any): Observable<any> {
    return this.http.post('http://localhost:8080/api/name/send', data, this.httpOptionsAuth);
  }

  recieveData(): Observable<any> {
    return this.http.get('http://localhost:8080/api/names/fetchAll',this.httpOptionsAuth);
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