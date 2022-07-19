import { Component, OnInit } from '@angular/core';
// add this lib
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  gotohome() {
    this.router.navigate(['/home']);
  }

  // add here private router: Router
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
