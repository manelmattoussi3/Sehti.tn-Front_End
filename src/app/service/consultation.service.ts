import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Consultation } from '../model/Consultation';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
  url =environment.API_URL;
  constructor(private http:HttpClient) { }
  getConsultation(idConsultation: any): Observable<any>{
    return this.http.get<Consultation[]>(this.url+'findConsultationById/'+idConsultation);
  }
  getAllConsultation(){
    return this.http.get<Consultation[]>(this.url+'findAllConsultations');
  }
  getConsultationbyFiche(idFiche:number): Observable<any>{
    return this.http.get<Consultation[]>(this.url+'getConsultationByFiche/'+idFiche);
  }
}
