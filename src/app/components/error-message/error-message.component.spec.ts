import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ErrorMessageComponent } from './error-message.component';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMessageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;

  }));

  it('should show error message on touch field', () => {
    //to show validation error for monadtory email"required""
    component.field= new FormGroup({anyField: new FormControl()});
    component.field.markAsTouched();
    component.field.setErrors({anyError:true});
    component.error="anyError"

    expect(component.shouldShowComponent()).toBeTruthy();
  });

  it('should show error message not touch field', () => {
   
    component.field= new FormGroup({anyField: new FormControl()});
   
    component.field.setErrors({anyError:true});
    component.error="anyError"

    expect(component.shouldShowComponent()).toBeFalsy();
  });

  it('should hide error message on field touch with no error', () => {

    component.field= new FormGroup({anyField: new FormControl()});
    component.error="anyError"
    expect(component.shouldShowComponent()).toBeFalsy();
  });

  it('should hide error message on field touch that has differnt errors', () => {
    //to show validation error for  email
   
   component.field= new FormGroup({anyField: new FormControl()});
   component.field.markAsTouched();
   component.field.setErrors({anyError:true});
   component.error="anotherError"

   expect(component.shouldShowComponent()).toBeFalsy();
  });

});
