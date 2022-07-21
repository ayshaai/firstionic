import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { PickupCallCardComponent } from './pickup-call-card.component';

describe('PickupCallCardComponent', () => {
  let component: PickupCallCardComponent;
  let fixture: ComponentFixture<PickupCallCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupCallCardComponent ],
      imports: [IonicModule.forRoot(),
        AppRoutingModule
        ]
    }).compileComponents();

    fixture = TestBed.createComponent(PickupCallCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
