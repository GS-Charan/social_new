import { Component,OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TokenStorageService } from '../../token-storage.service';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
	
  jsondata = {
    name: '5',
    time: ''
    
  };
  title = 'social_new';
  response: any = {};
    isLoggedIn = true;

  
   
  constructor(private dataService: DataService,private tokenStorageService: TokenStorageService,private router: Router) {}
  ngOnInit() {
    
  }
  onSubmit() {
	  const data = {
      name: this.jsondata.name,
      time: this.jsondata.time
    };
	  
	  console.log("before submit"+data);
	  
    this.dataService.sendData(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          
        },
        error: (e) => console.error(e)
      });
      
     this.dataService.recieveData()
         .subscribe({
			next: (res) => {
          console.log(res);
          this.response = res;
          
        }, error: (e) => console.error(e)
			 
		 });
      
  }
  navigateToLogin(): void {
    this.router.navigate(['/login']);  
  }
  logout(): void {
    this.tokenStorageService.signOut();
            this.navigateToLogin();

  }
}
