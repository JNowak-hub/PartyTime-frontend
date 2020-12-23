import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {LoginService} from '../service/loginservice/login-service';

@Injectable()
export class AuthorizationInterceptorInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const jwt = localStorage.getItem('jwt');
    if (jwt !== null) {
      if (!request.url.includes('/public/')) {
        request = request.clone({
          setHeaders: {
            Authorization: 'Bearer ' + jwt
          }
        });
      }
    }
    return next.handle(request);
  }
}
