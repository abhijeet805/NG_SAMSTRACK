import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  constructor(private userService: UserService) {}

  firstName: string = '';
  lastName: string = '';
  username: string = '';
  password: string = '';
  email: string = '';
  role: string = '';

  addUser() {
    this.userService.addUser(
      this.firstName,
      this.lastName,
      this.username,
      this.password,
      this.email,
      this.role
    ).subscribe((response)=>{
      alert("done")
    });
  }
}
