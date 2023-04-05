import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  load = false
  email:any = null;
  password:any = null;

  constructor(
    public authService:AuthService,
    public router:Router
  ) { }


  ngOnInit(): void {
    if(this.authService.user && this.authService.token){
      this.router.navigate(["/"]);
    }
  }

  login(){
    if(!this.email || !this.password){
      alert("NECESITAS COLOCAR UN EMAIL Y UNA CONTRASEÑA");
      return;
    }
    console.log(this.email, this.password)
    this.authService.login(this.email,this.password).subscribe((resp:any) => {
      console.log(resp);
      if(!resp.error && resp){
        this.router.navigate(["dashboard"]);

      }else{
        if(resp.error.error == 'Unauthorized' || resp.error.message == 'Unauthenticated.'){
          alert("EL USUARIO O CONTRASEÑA INGRESADO SON INCORRECTOS");
          return;
        }
      }
    })
  }

}
