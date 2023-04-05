import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { URL_BACKEND } from 'src/app/config/config';
import { map , catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:any;
  token:any = '';
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.loadStorage();
  }

  loadStorage(){
    if(localStorage.getItem("token")){
      this.token = localStorage.getItem("token");
    }else{
      this.token = '';
      this.user = null;
    }
  }

  login(email: string, password: string){
    let URL = URL_BACKEND + 'api/login';
    return this.http.post(URL,{email,password}).pipe(
      map((resp:any) => {
        console.log('🚀 ~ file: auth.service.ts:36 ~ AuthService ~ map ~ resp:', resp)
        if(resp.access_token){
          return this.saveLocalStorageResponse(resp);
        }else{
          return resp;
        }
      }),
      catchError((err:any) => {
        return of(err);
      })
    );
  }

  saveLocalStorageResponse(resp: any) {
    console.log('🚀 ~ file: auth.service.ts:49 ~ AuthService ~ saveLocalStorageResponse ~ resp:', resp)
    if(resp.access_token){
      localStorage.setItem("token",resp.access_token);
      this.token = resp.access_token;
      return true;
    }
    return false;
  }

  logout(){
    this.user = null;
    this.token = '';
    localStorage.removeItem('token');
    this.router.navigate(["auth/login"]);
  }

}
