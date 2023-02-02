import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent {
  
  constructor(private auth: AuthService, private router: Router) {
  }
  ngOnInit() {
    if (this.auth.checkAuth())
    {
      this.router.navigate(['/profile']);
    }
  }
  login(login: string, password:string) {
    //bind from login password inputs
    this.auth.login(login, password);
    if (this.auth.checkAuth()) {
      this.router.navigate(['/profile']);
    }
  }
}
