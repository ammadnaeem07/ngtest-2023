import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  public isUserLogin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor() { 
      if(JSON.parse(localStorage.getItem('isLogin') || ('false'))){
        this.isUserLogin.next(true);
      }
  }

  isLogin(){
   this.isUserLogin.subscribe(res => {
    return res; 
   })
  }
}
