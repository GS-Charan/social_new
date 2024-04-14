import { Component } from '@angular/core';
import { DataService } from './data.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'social_new';
  data: string = "";
  response: string = "";
  
  constructor(private dataService: DataService) {}
  
  onSubmit() {
	  console.log("before submit"+this.data);
    this.dataService.sendData(this.data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.response = res;
        },
        error: (e) => console.error(e)
      });
  }
}
