import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
// add this
let router:Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot(),
      //for form
      AppRoutingModule,
      ReactiveFormsModule
      ]
      
      
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
        //add router
        router= TestBed.get(Router);
// this for form
    component = fixture.componentInstance;

    fixture.detectChanges();
  }));
// here i must add this for login button
  it('it will go to home page', () => {
    spyOn(router,'navigate');
    component.login();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);

  });

  // here i must add this for login button
  it('it will go to register page', () => {
    spyOn(router,'navigate');
    component.register();
    expect(router.navigate).toHaveBeenCalledWith(['/register']);

  });
//this for form
it('should have form init', () => {
  component.ngOnInit();
    expect(component.form).not.toBeUndefined("");
          
            })



});
