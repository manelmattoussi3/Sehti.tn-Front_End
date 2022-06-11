import { Component, OnInit } from '@angular/core';
import { FilterMatchMode, SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { DemandeAcce, EtatAcce } from '../model/DemandeAcce';
import { dossierMedical } from '../model/DossierMedical';
import { patient } from '../model/patient';
import { DemandeService } from '../service/demande.service';
import { DossierMedicalService } from '../service/dossier-medical.service';

@Component({
  selector: 'app-medecin-famille',
  templateUrl: './medecin-famille.component.html',
  styleUrls: ['./medecin-famille.component.css']
})
export class MedecinFamilleComponent implements OnInit {
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
  constructor(private service: DossierMedicalService, private serviceDemande: DemandeService) { }

  ngOnInit(): void {
    this.demande=new DemandeAcce();
    this.getAllDossierMedicalPermanant();
    this.dossier = new dossierMedical();
    //this.getAllDemandes();
    this.matchModeOptions = [
      { label: 'Commence avec', value: FilterMatchMode.STARTS_WITH },
      { label: 'Contient', value: FilterMatchMode.CONTAINS },
      { label: 'Ne contient pas', value: FilterMatchMode.NOT_CONTAINS },
      { label: 'Se termine par', value: FilterMatchMode.EQUALS },
      { label: 'Equivaut à', value: FilterMatchMode.NOT_EQUALS },


    ];
  }
  getAllDossierMedicalPermanant() {
    this.service.getDossierMedicalPermanant().subscribe((data: dossierMedical[]) => { console.log(data), this.listDossier = data }, error => console.log(error));
 

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
