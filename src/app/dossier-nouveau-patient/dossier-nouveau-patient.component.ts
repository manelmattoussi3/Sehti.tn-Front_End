import { Component, OnInit } from '@angular/core';
import { FilterMatchMode, SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { dossierMedical } from '../model/DossierMedical';
import { patient } from '../model/patient';
import { DossierMedicalService } from '../service/dossier-medical.service';

@Component({
  selector: 'app-dossier-nouveau-patient',
  templateUrl: './dossier-nouveau-patient.component.html',
  styleUrls: ['./dossier-nouveau-patient.component.css']
})
export class DossierNouveauPatientComponent implements OnInit {
  listDossier: dossierMedical[];
  listPatient: patient[];
  dossier: dossierMedical;
  matchModeOptions: SelectItem[];

  selectedDossier:dossierMedical;
 
  display: boolean = false;
  
  
  constructor(private service:DossierMedicalService) { }

  ngOnInit(): void {
    this.getAllDossierMedical();
    this.matchModeOptions = [
      { label: 'Commence avec', value: FilterMatchMode.STARTS_WITH },
      { label: 'Contient', value: FilterMatchMode.CONTAINS },
      { label: 'Ne contient pas', value: FilterMatchMode.NOT_CONTAINS },
      { label: 'Se termine par', value: FilterMatchMode.EQUALS },
      { label: 'Equivaut à', value: FilterMatchMode.NOT_EQUALS },


    ];
  }
  getAllDossierMedical() {
    this.service.getDossierWithoutDemandes().subscribe((data: dossierMedical[]) => { console.log(data), this.listDossier = data }, error => console.log(error));

  }
  getEventValue($event:any) :string {
    return $event.target.value;
  } 
  clear(table: Table) {

    table.clear();

  }
}
