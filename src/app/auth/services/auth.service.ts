import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User{
  userName: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject( {} as User );
  public readonly currentUser: Observable<User> = this.currentUserSubject.asObservable();

  constructor() { }

  setCurrentUser(currentUser: User): void {
    this.currentUserSubject.next(currentUser);
  }

}
