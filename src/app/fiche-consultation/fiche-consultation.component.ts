import { Component, Input, OnInit } from '@angular/core';
import { FicheConsultation } from '../model/FicheConsultation';
import { FicheConsultationService } from '../service/fiche-consultation.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DetailDossierMedicalComponent } from '../detail-dossier-medical/detail-dossier-medical.component';
import { DetailConsultationComponent } from '../detail-consultation/detail-consultation.component';
import { ConsultationService } from '../service/consultation.service';
import { Consultation } from '../model/Consultation';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fiche-consultation',
  templateUrl: './fiche-consultation.component.html',
  styleUrls: ['./fiche-consultation.component.css']
})
export class FicheConsultationComponent implements OnInit {
  
idConsultation:any;
Listconsultation:Consultation[];
consultation:Consultation;
  listFiches: FicheConsultation[];
  @Input() fiche:FicheConsultation;
  isMenuOpened: boolean=false;
  show: boolean;
  public buttonName:any = 'Show';
  constructor(private route: ActivatedRoute,private service:FicheConsultationService,private servicec :ConsultationService ,private dialog: MatDialog) { }

  ngOnInit(): void {
    
    this.getAllFicheConsultation();
    this.toggleMenu();
    this.show =true;
    
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
  getAllFicheConsultation(){
    this.service.getFicheConsultation().subscribe((data: FicheConsultation[]) => this.listFiches = data);
  }
  showform(){
    this.show=!this.show;
   
  }
  create(){
    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="20%" ;
    
    this.dialog.open(DetailConsultationComponent);

      }
      getConsultation(){
        this.consultation=new Consultation();
    this.idConsultation = this.route.snapshot.params['idConsultation'];
     this.servicec.getConsultation(this.idConsultation).subscribe(data => {
      console.log(data)
      this.consultation = data;
    }, error => console.log(error));
      }
    }
