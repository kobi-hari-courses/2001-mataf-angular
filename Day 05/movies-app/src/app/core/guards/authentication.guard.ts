import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private auth: AuthenticationService, 
    private router: Router
  ){}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree>
  {
    console.log('Guard In...');
    let p =  this.auth.isLoggedIn().pipe(
      first()
    ).toPromise();
    let allowed = await p;

    if (allowed) return true;

    console.log('NO EDIT FOR YOU');
    let url = this.router.parseUrl('account');
    return url;
  }
  
}
