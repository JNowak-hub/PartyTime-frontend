import {Injectable} from '@angular/core';
import {LoginService} from '../loginservice/login-service';
import {UserService} from '../userservice/user.service';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  constructor(private loginService: LoginService, private userService: UserService) {
  }

  public Init(): void {
    const token = localStorage.getItem('jwt');
    console.log(token);
    if (token !== null) {
      if (this.loginService.validateToken().subscribe()) {
        this.loginService.validateToken().subscribe(res => console.log(res));
        this.loginService.isAuthenticated = true;
        this.userService.getUserFromToken(token).subscribe(res => this.userService.currentUser = res);
      }
    } else {
      this.loginService.isAuthenticated = false;
      localStorage.clear();
    }

  }
}
