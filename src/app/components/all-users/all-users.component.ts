import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUser();
  }

  users: any;

  getAllUser() {
    this.userService.getAllUser().subscribe((response) => {
      this.users = response;
    });
  }
}
