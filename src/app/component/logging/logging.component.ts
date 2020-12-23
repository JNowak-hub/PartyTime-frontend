import { Component, OnInit } from '@angular/core';
import {Authorization} from '../../model/Authorization';
import {LoginService} from '../../service/loginservice/login-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {

 authorization: Authorization = {
   username: '',
   password: ''
 };

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit(): void {

    console.log(this.authorization);
    this.loginService.login(this.authorization)
      .subscribe(
        res => {
          localStorage.setItem('jwt', res.jwt);
          this.router.navigate(['/']);
          this.loginService.isAuthenticated = true;
        },
        error => {
          alert(error.error);
        }
      );
  }
}
