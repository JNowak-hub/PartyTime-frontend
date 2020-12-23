import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Authorization} from '../../model/Authorization';
import {AuthorizationResponse} from '../../model/AuthorizationResponse';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public isAuthenticated = false;
  url = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  login(authorization: Authorization): Observable<AuthorizationResponse>{
    return this.httpClient.post<AuthorizationResponse>(this.url + '/login' , authorization);
  }

  validateToken(): Observable<boolean>{
    const token = localStorage.getItem('jwt');
    return this.httpClient.get<boolean>(this.url + '/login/verifyToken?token=' + token);
  }

}
