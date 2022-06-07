import { Component, Input, OnInit } from '@angular/core';
import { dossierMedical } from '../model/DossierMedical';
import { patient } from '../model/patient';
import { DossierMedicalService } from '../service/dossier-medical.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DemandeAcce } from '../model/DemandeAcce';
import { FicheConsultation } from '../model/FicheConsultation';
import { LettreConfidentielle } from '../model/LettreConfidentielle';

@Component({
  selector: 'app-dossier-medical',
  templateUrl: './dossier-medical.component.html',
  styleUrls: ['./dossier-medical.component.css']
})
export class DossierMedicalComponent implements OnInit {
  listDossier: dossierMedical[];
  listPatient:patient[];
  dossier: dossierMedical;
  idPatient:any;
  isMenuOpened: boolean=false;
  isMenuOpene: boolean=false;
  @Input() demande:DemandeAcce;
  listFiches: FicheConsultation[];
  @Input() lettre:LettreConfidentielle;
  loading: boolean = true;
  constructor(private service: DossierMedicalService ,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllDossierMedical();
    this.toggleMenu();
    this.toggleMen();
    this.loading = false;
    
  }
  getAllDossierMedical(){
    this.service.getDossierMedical().subscribe((data: dossierMedical[]) =>{console.log(data), this.listDossier = data}, error => console.log(error));
    
  }
  toggleMenu(){
    this.isMenuOpened=!this.isMenuOpened;
  }
  Search(){
    if(this.idPatient==''){
      this.ngOnInit()}
      else{
        this.listDossier=this.listDossier.filter(res=>{
          return res.patient.idPatient.toLocaleLowerCase().match(this.idPatient.toLocaleLowerCase());
        })
    }
  }
  create(){
this.dialog.open(DossierMedicalComponent);
  }
  toggleMen(){
    this.isMenuOpene=!this.isMenuOpene;
  }
}

