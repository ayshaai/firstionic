import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// add this lib
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AppState } from 'src/store/AppState';
import { hide, show } from 'src/store/loading/Loading.actions';
import { recoverdPassword, recoverdPasswordFail, recoverdPasswordSuccess } from 'src/store/Login/Login.actions';
import { LoginState } from 'src/store/Login/LoginState';
import { LoginPageForm } from './login.page.form';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit,OnDestroy {
  //add for form page
  form: FormGroup
//for recovering password
LoginStateSubscription : Subscription
  register() {
    this.router.navigate(['/register']);
  }
  // add login function automatic from writing component.login(); in login.page.spec.ts
  login() {
  this.router.navigate(['/home']);
  }

//for forget password and email
forgetEmailPassword(){
this.store.dispatch(recoverdPassword());

}
 // add here private router: Router
 //add formbuilder for form
 // Store<AppState> for spinner loading
 constructor(private router: Router,private formbuilder: FormBuilder, private store:Store<AppState>,
  private toastController:ToastController, private authService:AuthService){ }

  ngOnInit() {
    //add for form
    this.form= new LoginPageForm(this.formbuilder).createForm();
    //for login
   this.LoginStateSubscription= this.store.select('login').subscribe(loginState=>{
     this.OnIsRecoveredPassword(loginState);
     this.OnIsRecoveringPassword(loginState);
     this.OnIsRecoveringPasswordFail(loginState);
    })
         
  }
// to destroy function
  ngOnDestroy() {
    if(this.LoginStateSubscription){
      this.LoginStateSubscription.unsubscribe();
    }
  }

  
private OnIsRecoveringPassword(loginState:LoginState){
  if(loginState.isRecovingPassword){
    this.store.dispatch(show());
    // use auth service
    this.authService.recoverEmailPassword(this.form.get('email').value).subscribe(()=>{
this.store.dispatch(recoverdPasswordSuccess());
     },error=>{
      this.store.dispatch(recoverdPasswordFail({error}));
     }
     )
  }
}

private async OnIsRecoveringPasswordFail(loginState:LoginState){
  if(loginState.error){
    this.store.dispatch(hide());
    const toaster=await this.toastController.create({
      position:"bottom",
      message:loginState.error.message,
      color:"danger"
      
              });
              toaster.present();
  }

}

private async OnIsRecoveredPassword(loginState:LoginState){
  if(loginState.isRecovedPassword){
    this.store.dispatch(hide());
    const toaster=await this.toastController.create({
      position:"bottom",
      message:"recovering email send successfuly",
      color:"primary"
      
              });
              toaster.present();
  }

}

ForgetEmailPassword(){
this.store.dispatch(show())
setTimeout(() => {
  this.store.dispatch(hide())
}, 3000);
}
}
