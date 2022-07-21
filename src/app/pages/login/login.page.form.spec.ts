import { FormBuilder, FormGroup } from "@angular/forms";
import { LoginPageForm } from "./login.page.form";


let loginPageForm:LoginPageForm;
let  form: FormGroup;

describe ('LoginPageForm',()=>{
beforeEach(()=>{
 // to be public use
 loginPageForm= new LoginPageForm(new FormBuilder());
  form =loginPageForm.createForm();

})



it('should to have login form empty', () => {

expect(form).toBeNull();

    expect(form.get('email')).not.toBeNull();
    expect(form.get('email').value).toEqual("");
// to be not empty
expect(form.get('email').valid).toBeFalsy("");

    expect(form.get('password')).not.toBeNull();
    expect(form.get('password').value).toEqual("");
// to be not empty
expect(form.get('password').valid).toBeFalsy("");


  })

  it('should to have email invalid if email not valid', () => {

    form.get('email').setValue('invalid email');

    expect(form.get('email').valid).toBeFalsy("");
    
      })
    
      it('should to have email valid if email  valid', () => {
    
        form.get('email').setValue('valid@email.com');
    
        expect(form.get('email').valid).toBeTruthy("");
        
          })

  it('should have valid form', () => {

    form.get('email').setValue('valid@email.com');
    form.get('password').setValue('AnyPassword');

      expect(form.valid).toBeTruthy("");
            
              })
    

})