import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Role } from '../entities/role';
import { Tag } from '../entities/tag';
import { ApiService } from '../services/api.api-service';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  roles: Role[] = [];
  tags: Tag[] = [];

  currentRole: Role = new Role();
  currentTags: Tag[] = [];
  currentUsername: string = "";

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
  }

  changeRole(event: MatSelectChange) {
    console.log(event.value);
    this.currentRole.role_id=event.value;
    this.authService.currentUser.role=this.currentRole.role_id;
    this.apiService.updateUser(this.authService.currentUser).subscribe((result)=>console.log(`user updated ${result.role}`));
  }
}
