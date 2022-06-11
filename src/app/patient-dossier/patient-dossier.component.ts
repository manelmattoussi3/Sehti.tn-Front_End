import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { FilterMatchMode, SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { DetailConsultationComponent } from '../detail-consultation/detail-consultation.component';
import { Consultation } from '../model/Consultation';
import { DemandeAcce } from '../model/DemandeAcce';
import { dossierMedical } from '../model/DossierMedical';
import { FicheConsultation } from '../model/FicheConsultation';
import { patient } from '../model/patient';
import { ConsultationService } from '../service/consultation.service';
import { DossierMedicalService } from '../service/dossier-medical.service';

@Component({
  selector: 'app-patient-dossier',
  templateUrl: './patient-dossier.component.html',
  styleUrls: ['./patient-dossier.component.css']
})
export class PatientDossierComponent implements OnInit {
  id: string;
  dossier:dossierMedical;
  patient:patient;
  listDossier: dossierMedical[];
  isMenuOpened: boolean=false;
  listFiches: any[]=[];
   fiche:FicheConsultation;
   matchModeOptions: SelectItem[];
   loading: boolean = true;
   consultation:Consultation;
   selectedDossier:dossierMedical;
   display: boolean = false;
   Listconsultation:Consultation[];
   idConsultation:any;
  constructor(private route: ActivatedRoute,private servicec :ConsultationService ,private service:DossierMedicalService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dossier=new dossierMedical();
    this.patient=new patient();
    this.id = this.route.snapshot.params['idPatient'];
     this.service.AccederDossierByPatient(this.id).subscribe(data => {
      console.log(data)
      this.listDossier = data;
// for(var d of this.listDossier){
  
//   this.listFiches = this.listFiches.concat(d.fiche);
// }
// console.log(this.listFiches)
    }, error => console.log(error));
   
this.toggleMenu();
  }
  onRowSelect(event :any) {
    this.listFiches=event.data.fiche;
        this.display = true;
        console.log(event);
    
      }
      getEventValue($event:any) :string {
        return $event.target.value;
      } 
      clear(table: Table) {
    
        table.clear();
    
      }
    
      toggleMenu(){
        this.isMenuOpened=!this.isMenuOpened;
      }
      test(id:string){
        this.servicec.getConsultation(id).subscribe((data) => {
          console.log(data)
          this.consultation = data;
        }, (error) => console.log(error));
    
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
