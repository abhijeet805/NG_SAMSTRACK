import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
})
export class DeleteUserComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router:Router
  ) {}
  ngOnInit(): void {
    const selectedUsername =
      this.activatedRoute.snapshot.paramMap.get('username');

    this.userService.deleteUser(selectedUsername).subscribe((response) => {
      alert('deleted');
      this.router.navigate(['/get-all-users']);
    });
  }
}
