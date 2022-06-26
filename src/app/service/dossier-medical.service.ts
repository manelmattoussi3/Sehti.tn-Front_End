import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { dossierMedical } from '../model/DossierMedical';

@Injectable({
  providedIn: 'root'
})
export class DossierMedicalService {
url =environment.API_URL;

  constructor(private http:HttpClient) { }
getDossierMedical(){
  return this.http.get<dossierMedical[]>(this.url+'findAllSaufPermanant');
}
getDossierMedicalPermanant(){
  return this.http.get<dossierMedical[]>(this.url+'findByEtatDemande');
}
getDossierMedicalById(idDossier: number): Observable<any> {
  return this.http.get(this.url+'findbyId/'+idDossier);
}
AccederDossierByPatient(idPatient: string): Observable<any> {
  return this.http.get(this.url+'AccederDossierByPatient/'+idPatient);
}
AccederFicheByDossier(idDossier: number): Observable<any> {
  return this.http.get(this.url+'getFicheByDossier/'+idDossier);
}
AccederLettreByDossier(idDossier: number): Observable<any> {
  return this.http.get(this.url+'getLettreByDossier/'+idDossier);
}
getDossierWithoutDemandes(){
  return this.http.get<dossierMedical[]>(this.url+'findAllDossierWithoutDemandes');
}
AccederDossierByDemande(idDemande: string): any {
  return this.http.get(this.url+'findByDemande/'+idDemande);
}
PutDossier(dossier:dossierMedical){
return this.http.put(this.url+'ModifierDossier',dossier);
}
}
