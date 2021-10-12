import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements 
      CanActivate, 
      CanLoad {


  constructor(private authservice:AuthService, private router:Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // if(this.authservice.auth.id){
      //   return true;
      // }
      
      //   console.log('bloqueado por authlogin canActivate');
      // return false;
      return this.authservice.verificaAutenticacion()
              .pipe(
                 tap(estaAutenticado => {
                   if(!estaAutenticado){
                     this.router.navigate(['./auth/login'])
                   }
                 })
              );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean  {
      console.log('bloqueado por authlogin canLoad');
    
      return this.authservice.verificaAutenticacion()
      .pipe(
         tap(estaAutenticado => {
           if(!estaAutenticado){
             this.router.navigate(['./auth/login'])
           }
         })
      );
    //   console.log('canload', false);
    //   console.log('route',route);
    //   console.log('segments',segments);
    //   if(this.authservice.auth.id){
    //     return true;
    //   }
      
    //   console.log('bloqueado por authlogin canLoad');
    // return false;
  }
}
