import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { AuthService } from '../service/auth.service';
import { MustMatch } from '../validators/confirmPassword';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService],
})
export class RegisterComponent implements OnInit {

  items: MenuItem[];
    
    activeIndex: number = 1;
  signUpForm: FormGroup;
  selected = true;
  hidden = true;
 show=true;
  listrole = [

    { label: 'PROFESSIONNEL           ', value: 'PROFESSIONNEL' },

    { label: 'PATIENT          ', value: 'PATIENT' }


  ]
  constructor(
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
 this.items = [{
                label: 'Sinscrire',
                command: (event: any) => {
                    this.activeIndex = 0;
                    this.messageService.add({severity:'info', summary:'First Step', detail: event.item.label});
                }
            },
            {
                label: 'Informations',
                command: (event: any) => {
                    this.activeIndex = 1;
                    this.messageService.add({severity:'info', summary:'Seat Selection', detail: event.item.label});
                }
            },
            {
                label: 'Dossier_Médical',
                command: (event: any) => {
                    this.activeIndex = 2;
                    this.messageService.add({severity:'info', summary:'Pay with CC', detail: event.item.label});
                }
            },
            {
                label: 'Confirmation',
                command: (event: any) => {
                    this.activeIndex = 3;
                    this.messageService.add({severity:'info', summary:'Last Step', detail: event.item.label});
                }
            }
        ];
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
        
       // this._router.navigateByUrl('/register');
        this.showError();
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
                if(this.signUpForm.get("role")!.value !== "PATIENT"){ 
                this._router.navigateByUrl('/login');
               
                }
                else{
                  this._router.navigateByUrl('/formDossier');
                }
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

  openstep(roleEvent: any){
    
    this.signUpForm.get("role")!.setValue(roleEvent.target.value);

    if(this.signUpForm.get("role")!.value =="PATIENT"){

        this.show= false;}
      else{
        this.show= true;
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
showError() {
  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Attention! il faut remplir tous les champs' });
}
}
