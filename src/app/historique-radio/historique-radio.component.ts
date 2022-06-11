import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { dossierMedical } from '../model/DossierMedical';
import { FicheConsultation } from '../model/FicheConsultation';
import { patient } from '../model/patient';
import { DossierMedicalService } from '../service/dossier-medical.service';

@Component({
  selector: 'app-historique-radio',
  templateUrl: './historique-radio.component.html',
  styleUrls: ['./historique-radio.component.css']
})
export class HistoriqueRadioComponent implements OnInit {
  id: string;
  dossier:dossierMedical;
  patient:patient;
  listDossier: dossierMedical[];
 
  listFiches: any[]=[];
   fiche:FicheConsultation;
   matchModeOptions: SelectItem[];
  constructor(private route: ActivatedRoute,private service:DossierMedicalService) { }

  ngOnInit(): void {
    this.dossier=new dossierMedical();
    this.patient=new patient();
    this.id = this.route.snapshot.params['idPatient'];
     this.service.AccederDossierByPatient(this.id).subscribe(data => {
      console.log(data)
      this.listDossier = data;

    }, error => console.log(error));
  }
  getEventValue($event:any) :string {
    return $event.target.value;
  } 
  clear(table: Table) {

    table.clear();

  }
}
