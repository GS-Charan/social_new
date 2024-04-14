import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'social_new';
  data: string = "";
  response: string="";
  
  constructor(private dataService: DataService) {}
  
   onSubmit() {
    this.dataService.sendData(this.data).subscribe(
      response => {
        console.log(response); // Log the response
        this.response = response; // Store response in property
      },
      error => {
        console.error('Error:', error); // Handle error if any
      }
    );
  }
}
