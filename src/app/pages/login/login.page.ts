import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// add this lib
import { Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //add for form page
  form: FormGroup

  register() {
    this.router.navigate(['/register']);
  }
  // add login function automatic from writing component.login(); in login.page.spec.ts
  login() {
  this.router.navigate(['/home']);
  }

 // add here private router: Router
 //add formbuilder for form
 constructor(private router: Router,private formbuilder: FormBuilder) { }

  ngOnInit() {
    //add for form
    this.form= new LoginPageForm(this.formbuilder).createForm();
    
  }

}
