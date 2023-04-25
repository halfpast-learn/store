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
    this.apiService.readUserByName(login, password).subscribe((result) => {
      this.currentUser = result;
      if (result != null) {
        this.loggedIn.next(true);
      }
    });
  }
  logout(): void {
    this.loggedIn.next(false);
    this.currentUser = new User();
  }
  register(login: string, password: string): void {
    let user = new User();
    user.username = login;
    user.password = password;
    this.apiService.createUser(user).subscribe((result) => {});
  }
  getCurrentUser(): User {
    return this.currentUser;
  }
  changePassword(newPassword: string) {
    this.currentUser.password = newPassword;
    this.apiService
      .updateUserPassword(this.currentUser)
      .subscribe((result) => console.log(result));
  }
}
