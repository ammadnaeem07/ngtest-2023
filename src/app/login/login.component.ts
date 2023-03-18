import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../init/auth.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  f: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _loginService: LoginService,
    private router: Router,
    private authService: AuthService
  ) {

    this.f = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required,]],

    });
  }
  ngOnInit(): void {
  }
  onSubmit(modal?: any): void {
    if (this.f.valid) {
      this._loginService.login(this.f.value, '/auth/login').subscribe((res: Response) => {
        if (res.status == 200) {
          // console.log(res.body);
          alert('login successful')
          localStorage.setItem('userInfo', JSON.stringify(res.body));
          localStorage.setItem('isLogin', JSON.stringify(true));
          this.authService.isUserLogin.next(true);
          this.router.navigate(['/dashboard'])
        }
        else {

        }
      });
    } else {

      let temp = this.f.controls['name'];
      console.log('the controls', this.f.controls);
      console.log('name form', temp);
      Object.keys(this.f.controls).forEach(key => {
        this.f.get(key)?.markAsTouched();
      });

    }

  }
  onReset(): void {
    this.f.reset();
  }
}
