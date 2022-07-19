import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { LoaderPage } from './loader.page';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
// add this
  let router:Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderPage ],
      imports: [IonicModule.forRoot()]
    
    }).compileComponents();
  

    fixture = TestBed.createComponent(LoaderPage);
    //add router
    router= TestBed.get(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  //add router and navigate
  // i must add akeAsync for timeout and tick(1500) to wait time for going to another page
  it('should go to login page',fakeAsync(() => {
    spyOn(router,'navigate');
    component.ngOnInit();
    tick(1500);
    expect(router.navigate).toHaveBeenCalledWith(['/login'])
  }));
});
