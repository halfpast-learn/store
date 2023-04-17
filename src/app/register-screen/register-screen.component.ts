import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.scss']
})
export class RegisterScreenComponent {
  constructor(private auth: AuthService, private router: Router) {
    this.loginSubscription = this.auth.loggedIn.subscribe((result) => {
      this.loggedIn = result;
      if (result) {
        this.router.navigate(['/profile']);
      }
    });
    this.loggedIn = auth.loggedIn.getValue();
    if (this.loggedIn) {
      this.router.navigate(['/profile']);
    }}
  loggedIn = false;
  loginSubscription = new Subscription();
  
  register(login: string, password: string): void {
    this.auth.register(login, password);
  }
}
