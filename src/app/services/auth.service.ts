import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../entities/user';
import { ApiService } from './api.api-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService) {}
  loggedIn = new BehaviorSubject<boolean>(false);

  currentUser: User = new User();

  ngOnInit() {
    this.loggedIn.next(false);
  }

  login(login: string, password: string): void {
    this.apiService.readUserByName(login).subscribe((result) => {
      this.currentUser = result;
      if (result != null && password == result.password) {
        this.loggedIn.next(true);
      }
    });
  }
  logout(): void {
    this.loggedIn.next(false);
    this.currentUser = new User();
  }
  register(login: string, password: string, email: string): void {
    let user = new User();
    user.username = login;
    user.password = password;
    user.email = email;
    this.apiService.createUser(user).subscribe((result) => {
      this.currentUser = user;
      this.loggedIn.next(true);
    });
  }
  getCurrentUser(): User {
    return this.currentUser;
  }
}
