import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.api-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  test = ['test1', 'test2'];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.readUsers().subscribe((result) => {
      console.log(result);
    });
  }
}
