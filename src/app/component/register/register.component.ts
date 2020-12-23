import {Component, OnInit} from '@angular/core';
import {User} from '../../model/User';
import {UserService} from '../../service/userservice/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    provider: 'local',
    email: '',
    password: '',
    login: '',
    birthDate: undefined,
    firstName: undefined,
    lastName: undefined
  };

  errorMessages: {
    login?: string[];
    password?: string[];
    email?: string[];
    firstName?: string[];
    lastName?: string[];
    birthDate?: string[];
  } = {};

  submitted = false;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.userService.createNewUser(this.user).subscribe(
      res => {
        this.router.navigate(['/login']);
      },
      error => {
        this.errorMessages = error.error;
        console.log(this.errorMessages);
      });
    this.submitted = true;
  }
}
