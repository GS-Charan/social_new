import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewAccComponent } from './app/components/new-acc/new-acc.component';
import { LoginComponent } from './app/components/login/login.component';
const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'new-acc', component: NewAccComponent },
	{ path: 'login', component: LoginComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
