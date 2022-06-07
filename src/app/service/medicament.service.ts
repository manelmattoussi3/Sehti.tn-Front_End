import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Medicament } from '../model/Medicament';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {
url=environment.API_URL;
  constructor(private http:HttpClient) { }
  getAllMedicaments(){
   return this.http.get<Medicament[]>(this.url+'findAllMedicament');
  }
}
