import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/init/auth.service';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogin: boolean = false;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isUserLogin.subscribe( value => {
      this.isLogin = value;
  });
  }
  onLogout(){
    localStorage.clear();
    this.authService.isUserLogin.next(false);
    this.router.navigate(['/'])
  }
}
