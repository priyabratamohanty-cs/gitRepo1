import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";

  constructor(
    private http:HttpClient,
    private router:Router) { }

  isLoggedIn(){
    return !!localStorage.getItem('token');
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
  userRegistration(registerUserDetails){
    return this.http.post<any>(this._registerUrl,registerUserDetails);
  }

  loginUser(loginUserDetails){
    return this.http.post<any>(this._loginUrl,loginUserDetails);
  }

  getToken(){
    return localStorage.getItem('token');
  }


}
