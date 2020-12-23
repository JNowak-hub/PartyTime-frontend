import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {LoginService} from '../loginservice/login-service';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  constructor(private loginService: LoginService) {
  }

  public Init(): void {
    // if (localStorage.getItem('jwt')) {
    //   if (this.loginService.validateToken().pipe(
    //     map(() => true,
    //       () => false))) {
    //     console.log('authg');
    //     this.loginService.isAuthenticated = true;
    //     console.log(this.loginService.isAuthenticated);
    //   }
    // }
    this.loginService.isAuthenticated = false;
    localStorage.clear();
  }
}
