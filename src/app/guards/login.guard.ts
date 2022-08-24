import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authService:AuthService, private toastrService:ToastrService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.authService.isAuthenticated()) //token var mı authenticate mi?
    {
      return true // varsa yönlendir.
    }
    else
    {
      this.router.navigate(["login"]) //  yoksa logine yönlendir
      this.toastrService.info("Sisteme giriş yapınız") //infoyu ver
      return false; //istek route a yönlendirme.
    }

  }
  
}
