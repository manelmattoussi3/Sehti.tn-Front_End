import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilterMatchMode, MessageService, SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { FicheConsultation } from '../model/FicheConsultation';
import { OperationRadio } from '../model/OperationRadio';
import { FicheConsultationService } from '../service/fiche-consultation.service';
import { RadioService } from '../service/radio.service';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  providers:[MessageService]
})
export class RadioComponent implements OnInit {
radio:OperationRadio;
ListRadios :OperationRadio[];
matchModeOptions: SelectItem[];
registerForm :FormGroup;
ListFiche:FicheConsultation[];
showRadio:boolean=false;
fiche:FicheConsultation=new FicheConsultation();
options = [

  { label: 'Terminé            ', value: 'Terminé' },

  { label: 'EnCours           ', value: 'EnCours' }


]
optionsExam = [

  { label: 'IRM', value: 'IRM' },

  { label: 'TEP', value: 'TEP' },

  { label: 'SCANNERX', value: 'SCANNERX' },
  { label: 'ECHOGRAPHIE_DOPPLER', value: 'ECHOGRAPHIE_DOPPLER' },
  { label: 'ECHOGRAPHIE_SCINTIGRAPHIE', value: 'ECHOGRAPHIE_SCINTIGRAPHIE' },
  { label: 'TOMOGRAPHIE', value: 'TOMOGRAPHIE' }
]
display: boolean = false;
  constructor(private service:RadioService,private formBuilder: FormBuilder,private serviceFiche:FicheConsultationService ,private messageService: MessageService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      idOperation: ['', [Validators.required,Validators.pattern('[0-9]+$')]],
      observation: ['', [Validators.required,Validators.minLength(3),Validators.pattern('[a-z  A-Z ,; ! ? 0-9]+$')]],
      codeRadio: ['', Validators.required],
      motif: ['', Validators.required],
      resultat: ['', Validators.required],
      etablissement: ['', [Validators.required, Validators.minLength(3),Validators.pattern('[a-zA-Z]+$')]],
      type: ['', Validators.required],
      etat: ['', Validators.required],
      idFiche: ['', Validators.required]
    });
   
    this.getAllOperationRadio();
    this.matchModeOptions = [
      { label: 'Commence avec', value: FilterMatchMode.STARTS_WITH },
      { label: 'Contient', value: FilterMatchMode.CONTAINS },
      { label: 'Ne contient pas', value: FilterMatchMode.NOT_CONTAINS },
      { label: 'Se termine par', value: FilterMatchMode.EQUALS },
      { label: 'Equivaut à', value: FilterMatchMode.NOT_EQUALS },


    ];
    this.getAllFiches();
    this.radio=new OperationRadio();
  }
  getAllOperationRadio(){
    this.service.getAllRadio().subscribe((data:OperationRadio[])=>{console.log(data),this.ListRadios =data},error => console.log(error));
}
getEventValue($event: any): string {
  return $event.target.value;
}
clear(table: Table) {

  table.clear();

}
modelRadio(){
  this.showRadio=true;
    }

saveRadio(r:OperationRadio){
  if (this.registerForm.valid) {
 
this.service.addRadio(this.registerForm.value,this.fiche.idFiche).subscribe({
  next: (res: any) => {
    this.showSuccess();
  },
  error: () => {
    this.showErrorRadio();
  }
})
}
if(this.registerForm.invalid){
  this.showError();
}
}
getAllFiches() {
  this.serviceFiche.getFicheConsultation().subscribe((data: FicheConsultation[]) => {console.log(data),this.ListFiche=data},error => console.log(error));
  
}
showSuccess() {
  this.messageService.add({severity:'success', summary: 'Message de succé', detail: 'Radio est partagée avec succé'});
}
showError() {
this.messageService.add({severity:'error', summary: 'Error', detail: 'Attention! il faut remplir tous les champs'});
}
showErrorRadio() {

  this.messageService.add({ severity: 'error', summary: 'Error', detail: 'failure dans le partage de radio' });
}
}