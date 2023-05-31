import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss'],
})
export class LoginScreenComponent {
  loggedIn = false;
  loginSubscription = new Subscription();

  constructor(private auth: AuthService, private router: Router) {
    this.login("test", "123");
    this.loginSubscription = this.auth.loggedIn.subscribe((result) => {
      this.loggedIn = result;
      if (result) {
        this.router.navigate(['/profile']);
      }
    });
    this.loggedIn = auth.loggedIn.getValue();
    if (this.loggedIn) {
      this.router.navigate(['/profile']);
    }
  }

  async login(login: string, password: string) {
    this.auth.login(login, password);
  }
}
