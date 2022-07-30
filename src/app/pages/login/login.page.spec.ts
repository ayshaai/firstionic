import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { Store, StoreModule } from '@ngrx/store';
import { create } from 'domain';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppState } from 'src/store/AppState';
import { loadingReducer } from 'src/store/loading/Loading.reducers';
import { recoverdPassword, recoverdPasswordFail, recoverdPasswordSuccess } from 'src/store/Login/Login.actions';
import { loginReducer } from 'src/store/Login/Login.reducers';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
// add this
let router:Router;
//for login
let page;
let store:Store<AppState>;
//for show loading when recover password
let toastController:ToastController;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot(),
      //for form
      AppRoutingModule,
      ReactiveFormsModule,
      // for login action
      StoreModule.forRoot([]),
      StoreModule.forFeature("loading",loadingReducer),
      StoreModule.forFeature("login",loginReducer)
      ]
      
      
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
        //add router
        router= TestBed.get(Router);
// this for form
    component = fixture.componentInstance;

    fixture.detectChanges();
    //for login 
    page=fixture.debugElement.nativeElement;
    store=TestBed.get(Store);
    // for toast
    toastController=TestBed.get(ToastController);

  }));
// here i must add this for login button
  it('it will go to home page', () => {
    spyOn(router,'navigate');
    component.login();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);

  })

  // here i must add this for login button
  it('it will go to register page', () => {
    spyOn(router,'navigate');
    component.register();
    expect(router.navigate).toHaveBeenCalledWith(['/register']);

  })

//this for form
it('should have form init', () => {
  component.ngOnInit();
    expect(component.form).not.toBeUndefined("");
          
            })
//for login
//this for form
it('should recover email or password in click forget password', () => {
 fixture.detectChanges();
 component.form.get('email').setValue('valid@email.com');
 page.querySelector("#recoverPasswordButton").click();
  store.select('login').subscribe(loginState=>{
    expect(loginState.isRecovingPassword).toBeTruthy();

  })       
            })

 it('should show loading when recovering password', () => {
              fixture.detectChanges();
              store.dispatch(recoverdPassword());
               store.select('loading').subscribe(loadingState=>{
                 expect(loadingState.show).toBeTruthy();
             
               })       
                         })

 it('should hide loading and show success message when recovering password', () => {
  spyOn(toastController,'create');
                          fixture.detectChanges();
                          store.dispatch(recoverdPassword());
                          store.dispatch(recoverdPasswordSuccess());
                           store.select('loading').subscribe(loadingState=>{
    expect(loadingState.show).toBeFalsy();
 }) 
  expect(toastController.create).toHaveBeenCalledTimes(1);      
 })

 it('should hide loading and show error message when recovering password', () => {
  spyOn(toastController,'create');
                          fixture.detectChanges();
                          store.dispatch(recoverdPassword());
                          store.dispatch(recoverdPasswordFail({error:"message"}));
                           store.select('loading').subscribe(loadingState=>{
    expect(loadingState.show).toBeFalsy();
 }) 
      
 })

});
      