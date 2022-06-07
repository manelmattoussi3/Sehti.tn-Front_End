import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FicheConsultation } from '../model/FicheConsultation';

@Injectable({
  providedIn: 'root'
})
export class FicheConsultationService {
  url =environment.API_URL;
  constructor(private http:HttpClient) { }
  getFicheConsultation(){
    return this.http.get<FicheConsultation[]>(this.url+'findAllFiches');
  }
  getFicheConsultationById(idFiche: number): Observable<any> {
    return this.http.get<FicheConsultation[]>(this.url+'findFicheById/'+idFiche);
  }
}
