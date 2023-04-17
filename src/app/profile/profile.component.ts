import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Role } from '../entities/role';
import { Tag } from '../entities/tag';
import { ApiService } from '../services/api.api-service';
import { MatSelectChange } from '@angular/material/select';
import { Order } from '../entities/order';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  roles: Role[] = [];
  tags: Tag[] = [];
  orders: Order[] = [];

  currentRole: Role = new Role();
  currentTags: Tag[] = [];
  currentUsername: string = "";

  passwordErrorInvoked: boolean = false;

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.apiService.readRoles().subscribe((result) => {
      this.roles = result;
    });
    this.apiService.readTags().subscribe((result) => {
      this.tags = result;
    });
    this.apiService
      .readRole(
        this.authService.currentUser.role == undefined
          ? -1
          : this.authService.currentUser.role
      )
      .subscribe((result) => {
        this.currentRole = result==null?new Role():result;
      });
    this.currentUsername = this.authService.currentUser.username;
    this.apiService.readUserOrders(this.authService.currentUser.user_id!).subscribe((result) => {
      this.orders = result==null?[]:result.orders!;
      console.log(result.orders!);
    });
  }

  
  calculatePrice(order: Order) {
    let totalPrice = 0;
    for (let item of order.items) {
      totalPrice+=item.price;
    }
    return totalPrice;
  }

  changeRole(event: MatSelectChange) {
    console.log(event.value);
    this.currentRole.role_id=event.value;
    this.authService.currentUser.role=this.currentRole.role_id;
    this.apiService.updateUser(this.authService.currentUser).subscribe((result)=>console.log(`user updated ${result.role}`));
  }

  changePassword(newPassword: string, newPasswordAgain: string) {
    if (newPassword.length<2 || newPassword!==newPasswordAgain) {
      this.passwordErrorInvoked = true;
      return;
    }
    this.passwordErrorInvoked = false;
    this.authService.changePassword(newPassword);
  }
}
