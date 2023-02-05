import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Role } from '../entities/role';
import { Tag } from '../entities/tag';
import { ApiService } from '../services/api.api-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  roles: Role[] = [];
  tags: Tag[] = [];
  currentRole: string = '';
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
    this.apiService.readRole(this.authService.currentUser.role).subscribe((result)=> {
      this.currentRole = result.name;
    })   
  }
}
