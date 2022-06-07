import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { certificat } from '../model/Certificat';

@Injectable({
  providedIn: 'root'
})
export class CertificatService {
  url =environment.API_URL;
  constructor(private http:HttpClient) { }
  getCertificat(idCertificat: number): Observable<any>{
    return this.http.get<certificat[]>(this.url+'getCertifById/'+idCertificat);
  }
 
}
