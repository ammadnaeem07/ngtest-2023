import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  f: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _loginService: LoginService,
    private router: Router,
  ) { 
    this.f = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,]],

    });
  }

  ngOnInit(): void {
  }

  onSubmit(modal?: any): void {
    if (this.f.valid) {
      this._loginService.login(this.f.value, '/users/add').subscribe((res: Response) => {
        if (res.status == 200) {
          alert('Register successful');
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
