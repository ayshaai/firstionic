import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { RegisterPage } from './register.page';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
// add this
let router:Router;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPage ],
      imports: [IonicModule.forRoot(),
      AppRoutingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPage);
         //add router
         router= TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

 // here i must add this for login button
 it('it will go to home page', () => {
  spyOn(router,'navigate');
  component.gotohome();
  expect(router.navigate).toHaveBeenCalledWith(['/home']);

});
});
