import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }
  getLoginDetails(userName: string, password: string): Promise<ILoginResult> {
    const result: ILoginResult = { loginSuccessful: true }
    return new Promise(function(resolve) {
      resolve(result);
    });
  }
}

export interface ILoginResult {
  loginSuccessful: boolean;
}