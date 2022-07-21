import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
// add this lib
import { Router } from '@angular/router';
import { HomePage } from './home.page';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
// add this
let router:Router;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(),
        AppRoutingModule
        ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
      //add router
      router= TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
// here i must add this for login button
it('it will go to pickupcall page', () => {
  spyOn(router,'navigate');
  component.showcall();
  expect(router.navigate).toHaveBeenCalledWith(['/pickup-calls']);

});
// here i must add this for login button
it('it will add new pickupcall page', () => {
  spyOn(router,'navigate');
  component.addnew();
  expect(router.navigate).toHaveBeenCalledWith(['/pickup']);

});
});
