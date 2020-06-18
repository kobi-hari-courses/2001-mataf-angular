import { StateService } from './../services/state.service';
import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmptyListsGuard implements CanActivate {
  constructor(
    private state: StateService, 
    private router: Router){}

  async canActivate(): Promise<true | UrlTree> {
    const lists = await this.state.getAllLists().pipe(first()).toPromise()
    const listCount = lists.length;

    if (listCount > 0) return true;
    return this.router.createUrlTree(['lists', -1, 'edit']);
  }
  
}
