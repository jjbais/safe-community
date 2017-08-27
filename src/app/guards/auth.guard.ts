import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DialogService } from 'app/services/dialog.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, public dialog: DialogService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    if (localStorage.getItem('currentUser')) {
      return true;
    }

    this.router.navigateByUrl('/login');
    this.dialog.popUp('Please log in to continue.');
    return false;
  }
}
