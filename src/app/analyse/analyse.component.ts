import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FilterMatchMode, MessageService, SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { DemandeAcce } from '../model/DemandeAcce';
import { OperationAnalyse } from '../model/OperationAnalyse';
import { AnayseService } from '../service/analyse.service';
import { DropdownModule } from 'primeng/dropdown';
import { FicheConsultation } from '../model/FicheConsultation';
import { FicheConsultationService } from '../service/fiche-consultation.service';
@Component({
  selector: 'app-analyse',
  templateUrl: './analyse.component.html',
  styleUrls: ['./analyse.component.css'],
  providers: [MessageService]
})
export class AnalyseComponent implements OnInit {
  analyse: OperationAnalyse;
  ListAnalyses: OperationAnalyse[];
  showAnalyse: boolean = false;
  matchModeOptions: SelectItem[];
  loading: boolean = true;
  registerForm: FormGroup;
  ListFiche: FicheConsultation[];

  fiche: FicheConsultation = new FicheConsultation();
  options = [

    { label: 'Terminé            ', value: 'Terminé' },

    { label: 'EnCours           ', value: 'EnCours' }


  ]
  optionsExam = [

    { label: 'SANG', value: 'SANG' },

    { label: 'URINE', value: 'URINE' },

    { label: 'BACTERIOLOGIQUE', value: 'BACTERIOLOGIQUE' },
    { label: 'SEPARASITOLOGIQUE', value: 'SEPARASITOLOGIQUE' }
  ]
  display: boolean = false;
  constructor(private service: AnayseService, private serviceFiche: FicheConsultationService, private formBuilder: FormBuilder, private messageService: MessageService) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      idOperation: ['', [Validators.required, Validators.pattern('[0-9]+$')]],
      observation: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-z  A-Z ,; ! ? 0-9]+$')]],
      codeAnalyse: ['', Validators.required],
      motif: ['', Validators.required],
      resultat: ['', Validators.required],
      etablissement: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z]+$')]],
      type: ['', Validators.required],
      etat: ['', Validators.required],
      idFiche: ['', Validators.required]
    });

    this.getAllAnalyses();
    this.analyse = new OperationAnalyse();
    this.matchModeOptions = [
      { label: 'Commence avec', value: FilterMatchMode.STARTS_WITH },
      { label: 'Contient', value: FilterMatchMode.CONTAINS },
      { label: 'Ne contient pas', value: FilterMatchMode.NOT_CONTAINS },
      { label: 'Se termine par', value: FilterMatchMode.EQUALS },
      { label: 'Equivaut à', value: FilterMatchMode.NOT_EQUALS },


    ];

    this.getAllFiches();

  }
  getAllAnalyses() {
    this.service.getAnalyse().subscribe((data: OperationAnalyse[]) => { console.log(data), this.ListAnalyses = data }, error => console.log(error));

  }

  getEventValue($event: any): string {
    return $event.target.value;
  }
  clear(table: Table) {

    table.clear();

  }
  modelAnalyse() {
    this.showAnalyse = true;
  }



  saveAnalyse(o: OperationAnalyse) {
    if (this.registerForm.valid) {
      this.service.addAnalyse(this.registerForm.value, this.fiche.idFiche).subscribe({
        next: (res: any) => {
          this.showSuccess();
        },
        error: () => {
          this.showErrorAnalyse();
        }
      })
    }
    if(this.registerForm.invalid){
      this.showError();
    }
  }
  getAllFiches() {
    this.serviceFiche.getFicheConsultation().subscribe((data: FicheConsultation[]) => { console.log(data), this.ListFiche = data }, error => console.log(error));

  }
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Message de succé', detail: 'Analyse est partagée avec succé' });
  }
  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Attention! il faut remplir tous les champs' });
  }
  showErrorAnalyse() {

    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'failure dans le partage d analyse' });
  }

}
