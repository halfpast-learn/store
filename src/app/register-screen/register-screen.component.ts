import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.scss']
})
export class RegisterScreenComponent {
  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit() {
    if (this.auth.checkAuth()) {
      this.router.navigate(['/profile']);
    }
  }
  register(login: string, password: string, email: string): void {
    //bind from login password inputs
    this.auth.register(login, password, email);
    if (this.auth.checkAuth()) {
      this.router.navigate(['/profile']);
    }
  }
}
