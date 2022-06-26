import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { DossierLettreComponent } from '../dossier-lettre/dossier-lettre.component';
import { DemandeAcce } from '../model/DemandeAcce';
import { dossierMedical } from '../model/DossierMedical';
import { FicheConsultation } from '../model/FicheConsultation';
import { LettreConfidentielle } from '../model/LettreConfidentielle';
import { patient } from '../model/patient';
import { DemandeService } from '../service/demande.service';
import { DossierMedicalService } from '../service/dossier-medical.service';
import { FicheConsultationService } from '../service/fiche-consultation.service';
import { LettreConfidentielleService } from '../service/lettre-confidentielle.service';

@Component({
  selector: 'app-detail-dossier-medical',
  templateUrl: './detail-dossier-medical.component.html',
  styleUrls: ['./detail-dossier-medical.component.css'],
  providers: [MessageService]
})
export class DetailDossierMedicalComponent implements OnInit {
  id: string;
  var:string;
  dossier: dossierMedical;
  dossier2: dossierMedical;
  showFiche: boolean = false;
  showLettre:boolean = false;
  demande: DemandeAcce;
  listDossier: dossierMedical[];
  isMenuOpened: boolean = false;
  listFiches: FicheConsultation[];
  fiche: FicheConsultation;
 // fiche1: FicheConsultation;
  lettre: LettreConfidentielle;
  listeLettre: LettreConfidentielle[];
  idLettre: any;
  display: boolean = false;
  displayfich: boolean = false;
  displayfiche: boolean = false;
  registerForm: FormGroup;
  lettreForm: FormGroup;
  dossierForm: FormGroup;
  items: MenuItem[];
  showDossier:boolean=false;
  patient:patient;
  selectedFiche:FicheConsultation;
  listPatient:patient[];
  listDemande:DemandeAcce[];
  modifefiche: boolean = false;
  optionsSang = [

    { label: 'Aplus', value: 'Aplus' },

    { label: 'Amoins', value: 'Amoins' },

    { label: 'Bplus', value: 'Bplus' },
    { label: 'Bmoins', value: 'Bmoins' },
    { label: 'ABplus', value: 'ABplus' },
    { label: 'ABmoins', value: 'ABmoins' },
    { label: 'Oplus', value: 'Oplus' },
    { label: 'Omoins', value: 'Omoins' }
    
  ]
  
  constructor(private route: ActivatedRoute,
     private service: DossierMedicalService, 
     private dialog: MatDialog, 
     private servicel:LettreConfidentielleService,
      private serviceFiche: FicheConsultationService, 
      private formBuilder: FormBuilder,
       private messageService: MessageService,
       private lettreService:LettreConfidentielleService,
       private demandeService:DemandeService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      idFiche: ['', [Validators.required, Validators.pattern('[0-9]+$')]],
      observation: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-z  A-Z ,; ! ? 0-9]+$')]]
      

    });
    this.lettreForm = this.formBuilder.group({
      idLettre: ['', [Validators.required, Validators.pattern('[0-9]+$')]],
      observation: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-z  A-Z ,; ! ? 0-9]+$')]]
      

    });
    this.dossierForm =this.formBuilder.group({
     
     
      codeAcce: ['',Validators.required],
      poids: ['',[Validators.required, Validators.pattern('[0-9]+$')]],
      taille: ['',[Validators.required, Validators.pattern('[0-9]+$')]],
      perimetreCarnien: ['',[Validators.required, Validators.pattern('[0-9]+$')]],
      sang: ['',Validators.required]
     
     
      

    });
    this.dossier = new dossierMedical();
    this.demande = new DemandeAcce();

    this.var="test";
    this.id = this.route.snapshot.params['idDemande'];
    this.service.AccederDossierByDemande(this.id).subscribe((data:dossierMedical)=>this.dossier=data,console.log(this.dossier))
   console.log(this.var);
      this.listeLettre = this.dossier.lettres;
      this.listFiches = this.dossier.fiche;
      console.log(this.listFiches);
   
    console.log(this.dossier);
    console.log(this.dossier2);
    console.log(this.var);
    this.fiche = new FicheConsultation();
    
    this.lettre=new LettreConfidentielle();
    this.patient=new patient();
    this.toggleMenu();
   this.getAllLettres()
    this.getAllDemandes();
  
this.getAllFiches();
    this.items = [
      {label: 'Ajouter_Fiche', icon: 'pi pi-plus', command: () => {
          this.modelFiche();
      }},
    
      {separator:true},
      {label: 'Ajouter_Lettre', icon: 'pi pi-plus', command: () => {
        this.modelLettre();
    }}
  ];
  }
  getLettre() {
    this.lettre = new LettreConfidentielle();
    this.idLettre = this.route.snapshot.params['idLettre'];
    this.servicel.getLettreById(this.idLettre).subscribe(data => {
      console.log(data)
      this.lettre = data;
    }, error => console.log(error));
  }

  toggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
  }
  AfficherLettre() {
    this.display = true;
  }
  AfficherFiche() {
    this.displayfiche = true;
  }
  modelFiche() {
    this.showFiche = true;
  }
  modelLettre() {
    this.showLettre = true;
  }
  modelDossier() {
    this.showDossier = true;
  }
  saveFiche(fiche: FicheConsultation, id: string) {
   if(this.registerForm.valid){
    this.serviceFiche.addFicheConsultation(this.registerForm.value, id).subscribe
   ({next:(res:any)=>{
    this.showSuccess();
   },
   error:()=>{
    this.showErrorFonction();
   }
  })
    }
    if(this.registerForm.invalid){
      this.showError();
    }
  }
  saveLettre(lettre: LettreConfidentielle, id: string) {
    if(this.lettreForm.valid){
     this.servicel.addLettreConfidentielle(this.lettreForm.value, id).subscribe
    ({next:(res:any)=>{
     this.showSuccessLettre();
    },
    error:()=>{
     this.showErrorFonctionLettre();
    }
   })
     }
     if(this.lettreForm.invalid){
       this.showErrorLettre();
     }
   }
   putDossier(dossier:dossierMedical){
    if(this.dossierForm.valid){
    this.service.PutDossier(dossier).subscribe ({next:(res:any)=>{
      this.showSuccessDossier();
     },
     error:()=>{
      this.showErrorFonctionDossier();
     }
    })
      }
      if(this.dossierForm.invalid){
        this.showErrorDossier();
      }
      }
  // getAllFiches() {
  //   this.serviceFiche.getFicheConsultation().subscribe((data: FicheConsultation[]) => {console.log(data),this.ListFiche=data},error => console.log(error));

  // }
  showSuccessDossier() {
    this.messageService.add({ severity: 'success', summary: 'Message de succé', detail: 'le dossier médical est modifié avec succé' });
  }
  showErrorDossier() {

    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Attention! il faut remplir tous les champs' });
  }
  showErrorFonctionDossier() {

    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'failure dans la modification  de dossier médical' });
  }
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Message de succé', detail: 'Fiche_Consultation est partagée avec succé' });
  }
  showError() {

    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Attention! il faut remplir tous les champs' });
  }
  showErrorFonction() {

    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'failure dans le partage de fiche_consultation' });
  }
  showSuccessLettre() {
    this.messageService.add({ severity: 'success', summary: 'Message de succé', detail: 'Lettre_Confidentielle est partagée avec succé' });
  }
  showErrorLettre() {

    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Attention! il faut remplir tous les champs' });
  }
  showErrorFonctionLettre() {

    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'failure dans le partage de Lettre_Confidentielle' });
  }
  getAllLettres() {
    this.lettreService.getLettreConfidentielle().subscribe((data: LettreConfidentielle[]) => { console.log(data), this.listeLettre = data }, error => console.log(error));

  }
  getAllDemandes() {
    this.demandeService.getAllDemandes().subscribe((data: DemandeAcce[]) => { console.log(data), this.listDemande = data }, error => console.log(error));

  }
  getAllFiches() {
    this.serviceFiche.getFicheConsultation().subscribe((data: FicheConsultation[]) => { console.log(data), this.listFiches = data }, error => console.log(error));

  }
  onRowSelect(event :any) {
    
        this.modifefiche = true;
        console.log(event);
    
      }
      putFiche(fiche:FicheConsultation){
        if(this.registerForm.valid){
        this.serviceFiche.PutFiche(fiche).subscribe ({next:(res:any)=>{
          this.showSuccessDossier();
         },
         error:()=>{
          this.showErrorFonctionDossier();
         }
        })
          }
          if(this.registerForm.invalid){
            this.showErrorDossier();
          }
          }
}





