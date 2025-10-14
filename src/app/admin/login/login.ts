import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  isOTPSent: boolean = false;
  sendOTP() {
    this.isOTPSent = true;
  }
}
