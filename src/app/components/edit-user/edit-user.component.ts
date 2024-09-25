import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  selectedUser: any;

  firstName: string = '';
  lastName: string = '';
  username: string = '';
  password: string = '';
  email: string = '';
  role: string = '';

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.selectedUser = this.activatedRoute.snapshot.paramMap.get('username');

    this.userService
      .getUserByUsername(this.selectedUser)
      .subscribe((response) => {
        this.firstName = response.firstName;
        this.lastName = response.lastName;
        this.username = response.username;
        this.password = response.password;
        this.email = response.email;
        this.role = response.role;
      });
  }

  updateUser() {
    alert(this.firstName);
  }
}
