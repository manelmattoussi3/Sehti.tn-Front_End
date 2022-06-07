import { Component, OnInit } from '@angular/core';
import { FilterMatchMode, SelectItem } from 'primeng/api';
import { DemandeAcce, EtatAcce } from '../model/DemandeAcce';
import { dossierMedical } from '../model/DossierMedical';
import { patient } from '../model/patient';
import { DemandeService } from '../service/demande.service';
import { DossierMedicalService } from '../service/dossier-medical.service';
import { EventEmitter } from '@angular/core'
import { Table } from 'primeng/table';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-acueil-dossier',
  templateUrl: './acueil-dossier.component.html',
  styleUrls: ['./acueil-dossier.component.css']
})
export class AcueilDossierComponent implements OnInit {
 
  listDossier: dossierMedical[]=[];
  listPatient: patient[];
  dossier: dossierMedical;
  matchModeOptions: SelectItem[];
  loading: boolean = true;
  listdemandes: DemandeAcce[];
  demande: DemandeAcce;
  selectedDossier:dossierMedical;
  etat:boolean;
  display: boolean = false;
  etata:EtatAcce;
  show:boolean = true;
  constructor(private service: DossierMedicalService, private serviceDemande: DemandeService ) { }

  ngOnInit(): void {
    this.getAllDossierMedical();
    this.dossier = new dossierMedical();
    this.matchModeOptions = [
      { label: 'Commence avec', value: FilterMatchMode.STARTS_WITH },
      { label: 'Contient', value: FilterMatchMode.CONTAINS },
      { label: 'Ne contient pas', value: FilterMatchMode.NOT_CONTAINS },
      { label: 'Se termine par', value: FilterMatchMode.EQUALS },
      { label: 'Equivaut à', value: FilterMatchMode.NOT_EQUALS },


    ];

this.miseajourEtat(EtatAcce.ACCEPT);
  }
  getAllDossierMedical() {
    this.service.getDossierMedical().subscribe((data: dossierMedical[]) => { console.log(data), this.listDossier = data }, error => console.log(error));
 

  }
  getAllDemandes() {
    this.serviceDemande.getAllDemandes().subscribe((data: DemandeAcce[]) => { console.log(data), this.listdemandes = data }, error => console.log(error));

  }

  miseajourEtat(etata:EtatAcce) {
   if(etata ==EtatAcce.EnAttente)
   this.show =false;
   
    console.log(this.etata == EtatAcce.EnAttente);
  }
  onRowSelect(event :any) {
this.listdemandes=event.data.demandesacces;
    this.display = true;
    console.log(event);

  }
  getEventValue($event:any) :string {
    return $event.target.value;
  } 
  clear(table: Table) {

    table.clear();

  }

}
