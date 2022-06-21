import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LettreConfidentielle } from '../model/LettreConfidentielle';

@Injectable({
  providedIn: 'root'
})
export class LettreConfidentielleService {
  url =environment.API_URL;
  constructor(private http:HttpClient) { }
  getLettreConfidentielle(){
    return this.http.get<LettreConfidentielle[]>(this.url+'findAllLettres');
  }
  getLettreById(idLettre: number): Observable<any> {
    return this.http.get<LettreConfidentielle[]>(this.url+'findLettreById/'+idLettre);
  }
  addLettreConfidentielle(lettre:LettreConfidentielle ,id:string):any{
    return this.http.post<LettreConfidentielle>( `${this.url}PartagerLettreConfidentielle/Dossier/${id}`,lettre);
  
  
  }
}

