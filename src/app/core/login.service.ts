import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  loggedIn: boolean;

  constructor() { }

  login()  {
    this.loggedIn = true;
  }
  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
