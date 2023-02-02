import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn: boolean = false;
  currentUser: string = '';
  login(login: string, password: string): void {
    this.loggedIn = true;
    this.currentUser = login;
  }
  logout(): void {
    this.loggedIn = false;
    this.currentUser = '';
  }
  register(login: string, password: string, email: string): void {
    this.loggedIn = true;
    this.currentUser = login;
  }
  checkAuth(): boolean {
    return this.loggedIn;
  }
  getCurrentUser(): string {
    return this.currentUser;
  }
}
