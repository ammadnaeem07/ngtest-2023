import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngTest';

  f: FormGroup;
  constructor(private fb: FormBuilder) {

    this.f = this.fb.group({
      name: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,, Validators.minLength(6)]],

    });
  }
  onSubmit(modal?: any): void {
    if (this.f.valid) {
      alert('login successful')
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
