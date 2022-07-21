import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class LoginPageForm{

    private formBuilder: FormBuilder;
    constructor(formBuilder: FormBuilder){
        this.formBuilder=formBuilder;
    }

    createForm():FormGroup{
        return this.formBuilder.group({
// here declare items of form
//add validation for email  and password field ['',Validators.required]
email:['',[Validators.required,Validators.email]],

password:['',[Validators.required]],


        });
    }

}