import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean = false;
  login(login: string, password: string): void {
    this.loggedIn = true;
  }
  logout(): void {
    this.loggedIn = false;
  }
  checkAuth(): boolean {
    return this.loggedIn;
  }
}
