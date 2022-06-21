import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DossierMedicalComponent } from './dossier-medical/dossier-medical.component';
import { MenuDashboardComponent } from './menu-dashboard/menu-dashboard.component';
import { HeaderDashboardComponent } from './header-dashboard/header-dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { DetailDossierMedicalComponent } from './detail-dossier-medical/detail-dossier-medical.component';
import { PatientComponent } from './patient/patient.component';
import { DetailPatientComponent } from './detail-patient/detail-patient.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MenuDossierComponent } from './menu-dossier/menu-dossier.component';
import { FicheConsultationComponent } from './fiche-consultation/fiche-consultation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { dossierMedical } from './model/DossierMedical';
import { DetailConsultationComponent } from './detail-consultation/detail-consultation.component';
import { AnalyseComponent } from './analyse/analyse.component';
import { RadioComponent } from './radio/radio.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { OrdonanceComponent } from './ordonance/ordonance.component';
import { DetailOrdonanceComponent } from './detail-ordonance/detail-ordonance.component';
import { DetailCertificatComponent } from './detail-certificat/detail-certificat.component';
import { LettreConfidentielleComponent } from './lettre-confidentielle/lettre-confidentielle.component';
import { MedicamentComponent } from './medicament/medicament.component';
import { DetaiDossierFicheComponent } from './detai-dossier-fiche/detai-dossier-fiche.component';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import { AcueilDossierComponent } from './acueil-dossier/acueil-dossier.component';
import {ButtonModule} from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DossierNouveauPatientComponent } from './dossier-nouveau-patient/dossier-nouveau-patient.component';
import { InputTextModule } from 'primeng/inputtext';
import { DatePipe } from '@angular/common';
import {BadgeModule} from 'primeng/badge';
import { TagModule } from 'primeng/tag';
import { DossierLettreComponent } from './dossier-lettre/dossier-lettre.component';
import { MedecinFamilleComponent } from './medecin-famille/medecin-famille.component';
import { PatientDossierComponent } from './patient-dossier/patient-dossier.component';
import { PatientOperationComponent } from './patient-operation/patient-operation.component';
import { AnalysePatientComponent } from './analyse-patient/analyse-patient.component';
import { PatientRadioComponent } from './patient-radio/patient-radio.component';
import { HistoriqueRadioComponent } from './historique-radio/historique-radio.component';
import { CardModule, } from 'primeng/card';
import { SplitterModule } from "primeng/splitter";
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";

import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { FormanalyseComponent } from './formanalyse/formanalyse.component';
import {RippleModule} from 'primeng/ripple';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ProfilMedecinComponent } from './profil-medecin/profil-medecin.component';
@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    DossierMedicalComponent,
    MenuDashboardComponent,
    HeaderDashboardComponent,
    FooterComponent,
    DetailDossierMedicalComponent,
    PatientComponent,
    DetailPatientComponent,
    MenuDossierComponent,
    FicheConsultationComponent,
    DetailConsultationComponent,
    AnalyseComponent,
    RadioComponent,
    ConsultationComponent,
    OrdonanceComponent,
    DetailOrdonanceComponent,
    DetailCertificatComponent,
    LettreConfidentielleComponent,
    MedicamentComponent,
    DetaiDossierFicheComponent,
    AcueilDossierComponent,
    DossierNouveauPatientComponent,
    DossierLettreComponent,
    MedecinFamilleComponent,
    PatientDossierComponent,
    PatientOperationComponent,
    AnalysePatientComponent,
    PatientRadioComponent,
    HistoriqueRadioComponent,
    FormanalyseComponent,
    ProfilMedecinComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatDialogModule,
    TableModule,
    DropdownModule,
    ButtonModule,
    DialogModule,
    BrowserModule,
    InputTextModule,
    BadgeModule,
    CardModule,
    TagModule,
    SplitterModule,
    AutoCompleteModule,
    FormsModule,
    HttpClientModule,
    CalendarModule,
    ChipsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    ReactiveFormsModule,
    RippleModule,
    ToastModule,
    SplitButtonModule

    
    
  ],
  providers: [DatePipe],
 
  bootstrap: [AppComponent],
  
})
export class AppModule { }
