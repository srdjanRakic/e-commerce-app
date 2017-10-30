import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
   this.authService.user$.subscribe(user => {
     if(user) return true;

     this.router.navigate(['/login']);
     return false;
   });
  }
}
