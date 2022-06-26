import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { MustMatch } from '../validators/confirmPassword';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  signUpForm: FormGroup;
  selected = true;
  hidden = true;
 

  constructor(
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit(): void {

    this.signUpForm = this._formBuilder.group({
      username      : ['', [Validators.required, Validators.pattern('[a-z  A-Z ]+$')]],
      password  : ['', [Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$")]],
      email     : ['', [Validators.required, Validators.email]],
      confirmPassword:['',Validators.required],
      role   : ['PATIENT', Validators.required],
      diplome: [''],
      affiliation: ['']
    },
    {
      validator : MustMatch('password', 'confirmPassword') 

    }
    );

  }


  signUp(): void {

      // Do nothing if the form is invalid
      if ( this.signUpForm.invalid )
      {
          return;
      }

      var formData = new FormData();

      formData.append('user', new Blob([JSON.stringify(
          {
              "username": this.signUpForm.get("username")!.value,
              "password": this.signUpForm.get("password")!.value,
              "email": this.signUpForm.get("email")!.value,
              "role": this.signUpForm.get("role")!.value,
          }
      )], 
      {
          type: "application/json"
      }
      ));


      formData.append("diplome", this.signUpForm.get("diplome")!.value);
      formData.append("affiliation", this.signUpForm.get("affiliation")!.value);

      // Disable the form
      this.signUpForm.disable();

      this._authService.signUp(formData)
            .subscribe(
                 
              (response) => {
              // show error message  
              }, 

              (response) => {
                console.log("should be working ... ! ", response.status);
                this.signUpForm.enable();
                this._router.navigateByUrl('/login');
              }

              )

  }


  onChange(roleEvent: any){
    
    this.signUpForm.get("role")!.setValue(roleEvent.target.value);

    if(this.signUpForm.get("role")!.value !== "PATIENT"){

        this.hidden = false;
        this.signUpForm.get("diplome")!.setValidators(Validators.required);
        this.signUpForm.get("affiliation")!.setValidators(Validators.required);

        console.log("DIPLOMA AND AFFILIATION ARE NOW REQUIRED !");
    }
    else {
        this.hidden = true;
    }  
  }

  diplomeChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
        console.log(" file : ", event.target.files[0] as File);
        const file = event.target.files[0];
        this.signUpForm.get("diplome")!.setValue(file);
        //this.signUpForm.patchValue({diplome: file});
        console.log(" diplome : ", this.signUpForm.get("diplome")!.value);

        console.log(" FORM VALUES : ", this.signUpForm.value);
    }
}

affiliationChange(event: any){
    if (event.target.files && event.target.files.length > 0) {
        console.log(" file : ", event.target.files[0] as File);
        const file = event.target.files[0];
        this.signUpForm.get("affiliation")!.setValue(file);
        //this.signUpForm.patchValue({diplome: file});
        console.log(" affiliation : ", this.signUpForm.get("affiliation")!.value);

        console.log(" FORM VALUES : ", this.signUpForm.value);
    }
}

}
