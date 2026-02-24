import { Injectable } from '@angular/core';
import isEqual from "lodash/isEqual";
interface Admin {
  pseudo: string
  password: string
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginInfo: Admin = { pseudo: 'Alice200', password: 'passer123' };
  Token!: string
  constructor() { }

  login(obj:Admin ): void {
    if (isEqual(obj, this.loginInfo)) {
      this.Token = 'ABCD123';
    }
  }

  getToken() {
    return this.Token;
  }
}
