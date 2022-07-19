import { Component, OnInit } from '@angular/core';
// add this lib
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  register() {
    this.router.navigate(['/register']);
  }
  // add login function automatic from writing component.login(); in login.page.spec.ts
  login() {
  this.router.navigate(['/home']);
  }

 // add here private router: Router
 constructor(private router: Router) { }

  ngOnInit() {
  }

}
