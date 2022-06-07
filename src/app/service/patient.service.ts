import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { patient } from '../model/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
 url=environment.API_URL;
  constructor(private http:HttpClient) { }
   getAllPatient(){
    return this.http.get<patient[]>(this.url+'findAllPatient');
  }
  getPatientById(idPatient: number): Observable<any> {
    return this.http.get(this.url+'AccederPatient/'+idPatient);
  }
}
