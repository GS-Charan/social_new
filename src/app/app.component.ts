import { Component,OnInit } from '@angular/core';
import { DataService } from './data.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	
  jsondata = {
    name: ''
    
  };
  title = 'social_new';
  response: any = {};
  
   
  constructor(private dataService: DataService) {}
  ngOnInit() {
    
  }
  onSubmit() {
	  const data = {
      name: this.jsondata.name,
      
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
}
