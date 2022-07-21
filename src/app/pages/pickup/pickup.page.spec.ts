import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PickupPage } from './pickup.page';
// add this lib
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
describe('PickupPage', () => {
  let component: PickupPage;
  let fixture: ComponentFixture<PickupPage>;
// add this
let router:Router;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupPage ],
      imports: [IonicModule.forRoot(),
        AppRoutingModule
        ]
    }).compileComponents();

    fixture = TestBed.createComponent(PickupPage);
      //add router
      router= TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

// here i must add this for login button
it('it will add new pickupcall page', () => {
  spyOn(router,'navigate');
  component.addnewpickup();
  expect(router.navigate).toHaveBeenCalledWith(['/home']);
});
});
