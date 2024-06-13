import { Component , OnInit} from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-new-acc',
  templateUrl: './new-acc.component.html',
  styleUrl: './new-acc.component.css'
})
export class NewAccComponent implements OnInit {
	
	

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private dataService: DataService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.dataService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        
        this.navigateToLogin();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

navigateToLogin(): void {
    this.router.navigate(['/login']);  
  }
}
