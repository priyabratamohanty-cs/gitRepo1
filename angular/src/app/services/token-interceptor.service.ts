import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private _authservice:AuthService) { }

  intercept(req, next){
    let authService = this._authservice.getToken();
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${authService}`
      }
    })
    return next.handle(tokenizedReq);
  }
}
