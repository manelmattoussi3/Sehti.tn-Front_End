import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { Medicament } from '../model/Medicament';
import { Ordonance } from '../model/Ordonance';
import { Prescription } from '../model/Prescription';
import { AnayseService } from '../service/analyse.service';
import { MedicamentService } from '../service/medicament.service';
import { OrdonanceService } from '../service/ordonance.service';

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.css'],
  providers: [MessageService]
})
export class MedicamentComponent implements OnInit {
  medicament: Medicament;
  medicament1: Medicament;
  ordonance:Ordonance;
  prescription:Prescription;
  Listmedicaments :Medicament[];
  registerForm: FormGroup;
  prescriptionForm: FormGroup;
  items: MenuItem[];
  showMedicament: boolean = false;
  showPrescription: boolean = false;
  minDate:Date;
  
  EtatMedicament=[
    { label: 'TRAITE', value: 'TRAITE' },

    { label: 'NONTRAITE', value: 'NONTRAITE' },
  ]
  ClassMedical = [

    { label: 'Allergologie', value: 'Allergologie' },

    { label: 'Anesthésie', value: 'Anesthésie' },

    { label: 'Antalgique', value: 'Antalgique' },
    { label: 'Antipyrétique', value: 'Antipyrétique' },
    { label: 'Anti_inflammatoires', value: 'Anti_inflammatoires' },

    { label: 'cardiologie', value: 'cardiologie' },

    { label: 'Dermatologie', value: 'Dermatologie' },
    { label: 'Endocrinologie', value: 'Endocrinologie' },
    { label: 'Gastro', value: 'Gastro' },
    { label: 'Gynécologie', value: 'Gynécologie' },
    { label: 'Hématologie', value: 'Hématologie' },

    { label: 'Immunologie', value: 'Immunologie' },

    { label: 'Infectiologie', value: 'Infectiologie' },
    { label: 'Neurologie', value: 'Neurologie' },
    { label: 'Néphrologie', value: 'Néphrologie' },

    { label: 'Ophtalmologie', value: 'Ophtalmologie' },
    { label: 'Autre', value: 'Autre' }
  ]
  ListOrdonances: Ordonance[];
  isValidDate:any;
  constructor(private service:MedicamentService,
    private formBuilder: FormBuilder,
    private serviceOrdo: OrdonanceService,
     private messageService: MessageService) { }
     
  ngOnInit(): void {
    this.getAllMedicaments();
    this.getAllOrdonances();
    this.registerForm = this.formBuilder.group({
      idMedicament: ['', [Validators.required, Validators.pattern('[0-9]+$')]],
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-z  A-Z ,; ! ? 0-9]+$')]],
      classe: ['', Validators.required]
     
    });
    this.prescriptionForm = this.formBuilder.group({
      idPre: ['', [Validators.required, Validators.pattern('[0-9]+$')]],
      dateDebut: ['', Validators.required],
     
      dateFin: ['', Validators.required],
      dose: ['', [Validators.required, Validators.pattern('[0-9]+$')]],
      nbrFois: ['', [Validators.required, Validators.pattern('[0-9]+$')]],
      unite: ['', [Validators.required,  Validators.pattern('[a-zA-Z]+$')]],
      etat: ['', Validators.required],
      idMedicament: ['', Validators.required],
      idOrdonance: ['', Validators.required]

     
    });
    this.items = [
      {
        label: 'Ajouter_Medicament', icon: 'pi pi-plus', command: () => {
          this.modelMedicament();
        }
      },

      { separator: true },
      {
        label: 'Ajouter_Prescription', icon: 'pi pi-plus', command: () => {
          this.modelPrescription();
        }
      }
     
    ];
   
this.medicament1=new Medicament();
this.medicament=new Medicament();
this.ordonance=new Ordonance();
this.prescription=new Prescription();
  }
  
getAllMedicaments(){
  this.service.getAllMedicaments().subscribe((data:Medicament[])=>this.Listmedicaments=data);
}

minDatee(event:any){
  
this.minDate=event;
//this.minDate.setDate( this.minDate.getDate() - 1 );
console.log(this.minDate);
  
}
saveMedicament(m: Medicament) {
  
  if (this.registerForm.valid) {
    this.service.addMedicament(this.registerForm.value).subscribe({
      next: (res: any) => {
        this.showSuccess();
      },
      error: () => {
        this.showErrorMedicament();
      }
    })
  }
  if(this.registerForm.invalid){
    this.showError();
  }
}
savePrescription(p:Prescription) {
  if (this.prescriptionForm.valid) {
    this.service.addPrescription(this.prescriptionForm.value,this.medicament1.idMedicament,this.ordonance.idOrdonance).subscribe({
      next: (res: any) => {
        this.showSuccessPrescription();
      },
      error: () => {
        this.showErrorFunctionPrescription();
      }
    })
  }
  if(this.prescriptionForm.invalid){
    this.showErrorPrescription();
  }
}
showSuccessPrescription() {
  this.messageService.add({ severity: 'success', summary: 'Message de succé', detail: 'Prescription est ajouté avec succé' });
}
showErrorFunctionPrescription() {
  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Attention! il faut remplir tous les champs' });
}
showErrorPrescription() {

  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'failure dans l ajout de prescription' });
}
showSuccess() {
  this.messageService.add({ severity: 'success', summary: 'Message de succé', detail: 'Médicament est ajouté avec succé' });
}
showError() {
  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Attention! il faut remplir tous les champs' });
}
showErrorMedicament() {

  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'failure dans l ajout de médicament' });
}
modelMedicament() {
  this.showMedicament = true;
}
modelPrescription() {
  this.showPrescription = true;
}
getAllOrdonances() {
  this.serviceOrdo.getAllOrdonances().subscribe((data: Ordonance[]) => { console.log(data), this.ListOrdonances = data });
}
}
