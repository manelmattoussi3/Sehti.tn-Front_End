import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DemandeAcce } from '../model/DemandeAcce';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {
  url =environment.API_URL;
  constructor(private http:HttpClient) { }
  getAllDemandes(){
    return this.http.get<DemandeAcce[]>(this.url+'findAllDemandes')
  }
}
