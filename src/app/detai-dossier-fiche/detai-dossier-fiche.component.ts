import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DetailConsultationComponent } from '../detail-consultation/detail-consultation.component';
import { Consultation } from '../model/Consultation';
import { dossierMedical } from '../model/DossierMedical';
import { FicheConsultation } from '../model/FicheConsultation';
import { ConsultationService } from '../service/consultation.service';
import { DossierMedicalService } from '../service/dossier-medical.service';
import { FicheConsultationService } from '../service/fiche-consultation.service';

@Component({
  selector: 'app-detai-dossier-fiche',
  templateUrl: './detai-dossier-fiche.component.html',
  styleUrls: ['./detai-dossier-fiche.component.css']
})
export class DetaiDossierFicheComponent implements OnInit {
  idf:number;
  fiche:FicheConsultation[];
  f:FicheConsultation;
  dossier:dossierMedical;
  idConsultation:any;
Listconsultation:Consultation[];
consultation:Consultation;
isMenuOpened: boolean=false;
  constructor(private route: ActivatedRoute,private service :DossierMedicalService,private servicec :ConsultationService ,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dossier=new dossierMedical();
    this.f=new FicheConsultation();
    this.idf = this.route.snapshot.params['idDossier'];
     this.service.AccederFicheByDossier(this.idf).subscribe(data => {
      console.log(data)
      this.fiche = data;
    }, error => console.log(error));
  }
  getConsultation(){
    this.consultation=new Consultation();
this.idConsultation = this.route.snapshot.params['idConsultation'];
 this.servicec.getConsultation(this.idConsultation).subscribe(data => {
  console.log(data)
  this.consultation = data;
}, error => console.log(error));
  }
  create(){
    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="20%" ;
    
    this.dialog.open(DetailConsultationComponent);

      }
      test(id:string){
        this.servicec.getConsultation(id).subscribe((data) => {
          console.log(data)
          this.consultation = data;
        }, (error) => console.log(error));
    
      }
      toggleMenu(){
        this.isMenuOpened=!this.isMenuOpened;
      }
}
