import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MenuItem, MessageService } from 'primeng/api';
import { certificat } from '../model/Certificat';
import { Consultation } from '../model/Consultation';
import { FicheConsultation } from '../model/FicheConsultation';
import { Ordonance } from '../model/Ordonance';
import { CertificatService } from '../service/certificat.service';
import { ConsultationService } from '../service/consultation.service';
import { FicheConsultationService } from '../service/fiche-consultation.service';
import { OrdonanceService } from '../service/ordonance.service';

@Component({
 
  selector: 'app-profil-medecin',
  templateUrl: './profil-medecin.component.html',
  styleUrls: ['./profil-medecin.component.css'],
  providers: [MessageService]
})
export class ProfilMedecinComponent implements OnInit {
  items: MenuItem[];
  ordonanceForm: FormGroup;
  certificatForm: FormGroup;
  consultationForm: FormGroup;
  showOrdonance: boolean = false;
  showCertificat: boolean = false;
  showConsultation: boolean = false;
  certificat: certificat;
  ordonance: Ordonance;
  consultation: Consultation;
  ordonance1: Ordonance;
  certificat1: certificat;
  idCertificatConsultation:string
idOdrenanceonsultation:string
  options = [

    { label: 'VALIDE', value: 'VALIDE' },

    { label: 'ANNULE', value: 'ANNULE' }


  ]
  etatOrdonances = [

    { label: 'ACTIVE', value: 'ACTIVE' },

    { label: 'DESACTIVE', value: 'DESACTIVE' }


  ]
  ListFiche: FicheConsultation[];
  ListOrdonances: Ordonance[];
  ListCertificat: certificat[];

  fiche: FicheConsultation = new FicheConsultation();
  constructor(private formBuilder: FormBuilder,
    private serviceFiche: FicheConsultationService,
    private serviceOrdo: OrdonanceService,
    private serviceCertif: CertificatService,
    private serviceCon: ConsultationService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.certificatForm = this.formBuilder.group({
      idCertificat: ['', [Validators.required, Validators.pattern('[0-9]+$')]],
      contenu: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-z  A-Z ,; ! ? 0-9]+$')]]
    });

    this.ordonanceForm = this.formBuilder.group({
      idOrdonance: ['', [Validators.required, Validators.pattern('[0-9]+$')]],

      etat: ['', Validators.required],
      nouveaute: ['', Validators.required]
    });
    this.consultationForm = this.formBuilder.group({
      idConsultation: ['', [Validators.required, Validators.pattern('[0-9]+$')]],
      observation: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-z  A-Z ,; ! ? 0-9]+$')]],
      lieu: ['', [Validators.required, Validators.pattern('[a-z  A-Z ,; ! ? 0-9]+$')]],
      etat: ['', Validators.required],
      idCertificat: ['', Validators.required],
      idOrdonance: ['', Validators.required],
      idFiche: ['', Validators.required]
    });


    this.items = [
      {
        label: 'Ajouter_Ordonance', icon: 'pi pi-plus', command: () => {
          this.modelOrdonance();
        }
      },

      { separator: true },
      {
        label: 'Ajouter_Certificat', icon: 'pi pi-plus', command: () => {
          this.modelCertificat();
        }
      },
      { separator: true },
      {
        label: 'Ajouter_Consultation', icon: 'pi pi-plus', command: () => {
          this.modelConsultation();
        }
      }
    ];
    this.certificat = new certificat();
    this.ordonance = new Ordonance();
    this.certificat1 = new certificat();
    this.ordonance1= new Ordonance();
    this.consultation = new Consultation();
    this.getAllFiches();
    this.getAllOrdonances();
    this.getAllCertificats();
    
  }
  modelOrdonance() {
    this.showOrdonance = true;
  }
  modelCertificat() {
    this.showCertificat = true;
  }
  modelConsultation() {
    this.showConsultation = true;
  }
  getAllFiches() {
    this.serviceFiche.getFicheConsultation().subscribe((data: FicheConsultation[]) => { console.log(data), this.ListFiche = data }, error => console.log(error));

  }
  getAllOrdonances() {
    this.serviceOrdo.getAllOrdonances().subscribe((data: Ordonance[]) => { console.log(data), this.ListOrdonances = data });
  }
  getAllCertificats() {
    this.serviceCertif.getAllCertificats().subscribe((data: certificat[]) => { console.log(data), this.ListCertificat = data }, error => console.log(error));
  }
  saveConsultation(c: Consultation) {
    console.log(c);
    console.log(this.consultationForm.value);
    if (this.consultationForm.valid) {
      this.serviceCon.addConsultation(this.consultationForm.value, this.fiche.idFiche, this.ordonance1.idOrdonance, this.certificat1.idCertificat).subscribe({
        next: (res: any) => {
          this.showSuccess();
        }
      
      })
    }
    if (this.consultationForm.invalid) {
      this.showError();
    }
  }
  saveOrdonance(o: Ordonance) {

  }
  saveCertificat(c: certificat) {
    if (this.certificatForm.valid) {
      this.serviceCertif.addCertificat(this.certificatForm.value).subscribe({
        next: (res: any) => {
          this.showSuccessCertificat();
        },
        error: () => {
          this.showErrorFunctionCertif();
        }
      })
    }
    if (this.certificatForm.invalid) {
      this.showErrorCertificat();
    }
  }
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Message de succé', detail: 'Consultation est partagée avec succé' });
  }
  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Attention! il faut remplir tous les champs' });
  }
  showErrorConsultation() {

    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'failure dans le partage de consultation' });
  }
  showSuccessCertificat() {
    this.messageService.add({ severity: 'success', summary: 'Message de succé', detail: 'Certificat est partagée avec succé' });
  }
  showErrorCertificat() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Attention! il faut remplir tous les champs' });
  }
  showErrorFunctionCertif() {

    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'failure dans le partage de certificat' });
  }
}

