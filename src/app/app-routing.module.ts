import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DossierMedicalComponent } from './dossier-medical/dossier-medical.component';
import { DetailDossierMedicalComponent } from './detail-dossier-medical/detail-dossier-medical.component';
import { PatientComponent } from './patient/patient.component';
import { DetailPatientComponent } from './detail-patient/detail-patient.component';
import { MenuDossierComponent } from './menu-dossier/menu-dossier.component';
import { FicheConsultationComponent } from './fiche-consultation/fiche-consultation.component';
import { DetailConsultationComponent } from './detail-consultation/detail-consultation.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { RadioComponent } from './radio/radio.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { DetailCertificatComponent } from './detail-certificat/detail-certificat.component';
import { OrdonanceComponent } from './ordonance/ordonance.component';
import { DetailOrdonanceComponent } from './detail-ordonance/detail-ordonance.component';
import { LettreConfidentielleComponent } from './lettre-confidentielle/lettre-confidentielle.component';
import { MedicamentComponent } from './medicament/medicament.component';
import { DetaiDossierFicheComponent } from './detai-dossier-fiche/detai-dossier-fiche.component';
import { AcueilDossierComponent } from './acueil-dossier/acueil-dossier.component';
import { DossierNouveauPatientComponent } from './dossier-nouveau-patient/dossier-nouveau-patient.component';
import { DossierLettreComponent } from './dossier-lettre/dossier-lettre.component';
import { MedecinFamilleComponent } from './medecin-famille/medecin-famille.component';
import { PatientDossierComponent } from './patient-dossier/patient-dossier.component';
import { PatientOperationComponent } from './patient-operation/patient-operation.component';
import { AnalysePatientComponent } from './analyse-patient/analyse-patient.component';
import { PatientRadioComponent } from './patient-radio/patient-radio.component';
import { HistoriqueRadioComponent } from './historique-radio/historique-radio.component';
import { FormanalyseComponent } from './formanalyse/formanalyse.component';
import { ProfilMedecinComponent } from './profil-medecin/profil-medecin.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'professional', component: DashboardComponent },
  { path: 'about', component: AccueilComponent },
  { path: 'dossier', component: DossierMedicalComponent },
  { path: 'dossier/detail/:idDossier', component: DetailDossierMedicalComponent},
  { path: 'patient', component: PatientComponent},
  { path: 'patient/detail/:idPatient', component: DetailPatientComponent},
  { path: 'acueilDossier', component: AcueilDossierComponent},
  { path: 'ficheConsultation', component: FicheConsultationComponent},
  { path: 'analyse', component:AnalyseComponent},
  { path: 'ficheConsultation/detail/:idConsultation', component: DetailConsultationComponent},
  { path: 'radio', component:RadioComponent},
  { path: 'consultation', component:ConsultationComponent},
  { path: 'consultation/detail/:idCertificat', component: DetailCertificatComponent},
  { path: 'acueilDossier/detaild/:idDemande', component: DetailDossierMedicalComponent},
  { path: 'medecinFamille/detaild/:idDemande', component: DetailDossierMedicalComponent},
  { path: 'consultation/detailor/:idOrdonance', component: DetailOrdonanceComponent},
  { path: 'ordonance', component:OrdonanceComponent},
  { path: 'lettre', component:LettreConfidentielleComponent},
  { path: 'medicament', component:MedicamentComponent},
  { path: 'dossier/detailPatient/:idPatient', component: DetailPatientComponent},
  { path: 'dossier/detailFiche/:idDossier', component:DetaiDossierFicheComponent},
  { path: 'acueilDossier/detaild/:idDemande/detailFiche/:idDossier', component: DetaiDossierFicheComponent},
  { path: 'acueilDossier/detaild/:idDemande/detailLettre/:idDossier', component: DossierLettreComponent},
  { path: 'acueilDossier/detaild/:idDemande/detailPatient/:idPatient', component: PatientDossierComponent},
  { path: 'medecinFamille/detaild/:idDemande/detailPatient/:idPatient', component: PatientDossierComponent},
  { path: 'dossierNouveaux', component:DossierNouveauPatientComponent},
  { path: 'medecinFamille', component:MedecinFamilleComponent},
  { path: 'patientOperation', component:PatientOperationComponent},
  { path: 'patientRadio', component:PatientRadioComponent},
  { path: 'profilMedecin', component:ProfilMedecinComponent},
  { path: 'patientOperation/detail/:idPatient', component:AnalysePatientComponent},
  { path: 'patientRadio/detailRadio/:idPatient', component:HistoriqueRadioComponent},
  { path: 'form', component:FormanalyseComponent},
  { path: '**', component: PageNotFoundComponent }

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
