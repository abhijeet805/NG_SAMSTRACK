import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: any;
  password: any;

  constructor(private authService: AuthService) {}

  loginUser() {
    this.authService
      .loginUser(this.username, this.password)
      .subscribe((response) => {

        if(response!=null){
          console.log(response);
        }else{
          alert("Invalid Credientials")
        }

      });
  }
}
