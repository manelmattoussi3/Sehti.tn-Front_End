import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { dossierMedical } from '../model/DossierMedical';
import { patient } from '../model/patient';
import { DossierMedicalService } from '../service/dossier-medical.service';

@Component({
  selector: 'app-form-dossier',
  templateUrl: './form-dossier.component.html',
  styleUrls: ['./form-dossier.component.css'],
  providers: [MessageService]
})
export class FormDossierComponent implements OnInit {
dossier:dossierMedical;
ListDossier:dossierMedical[];
patient:patient;
registerForm: FormGroup;
optionsSang = [

  { label: 'Aplus', value: 'Aplus' },

  { label: 'Amoins', value: 'Amoins' },

  { label: 'Bplus', value: 'Bplus' },
  { label: 'Bmoins', value: 'Bmoins' },
  { label: 'ABplus', value: 'ABplus' },
  { label: 'ABmoins', value: 'ABmoins' },
  { label: 'Oplus', value: 'Oplus' },
  { label: 'Omoins', value: 'Omoins' }
  
]
items: MenuItem[];
    
    activeIndex: number = 2;
  constructor(private service:DossierMedicalService, private formBuilder: FormBuilder, private messageService: MessageService) { }

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
    this.registerForm = this.formBuilder.group({
      idDossier: ['', [Validators.required, Validators.pattern('[0-9]+$')]],
      
      poids: [''],
      taille: [''],
      perimetreCarnien: [''],
      sang: [''],
      nomPatient: ['', Validators.required]
    });
    this.patient=new patient();
    this.dossier=new dossierMedical();
  }
  saveDossier(dossier:dossierMedical,nomPatient: string) {
    if(this.registerForm.valid){
     this.service.addDossier(this.registerForm.value, nomPatient).subscribe
    ({next:(res:any)=>{
     this.showSuccess();
    },
    error:()=>{
     this.showErrorFonction();
     console.log(dossier);
    }
   })
     }
     if(this.registerForm.invalid){
       this.showError();
     }
   }
   showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Message de succé', detail: 'Le dossier médicale est enregistré avec succé' });
  }
  showError() {

    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Attention! il faut remplir  les champs obligatoires' });
  }
  showErrorFonction() {

    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'failure dans l enregistrement de dossier médicale' });
  }
}
