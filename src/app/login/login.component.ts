import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../loginservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedIn: boolean = false;
  loginForm: FormGroup;
  constructor(private loginService: LoginService) {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onLogin() {
    if(this.loginForm.valid) {
    let result = this.loginService.getLoginDetails(this.loginForm.get('userName')?.value, this.loginForm.get('password')?.value);
    result.then((login) => {
      if(login.loginSuccessful) {
       this.loggedIn = true;
      }
      else {
        this.loggedIn = false;
      }
    })  
    } 
  }

  ngOnInit(): void {
  }

}
