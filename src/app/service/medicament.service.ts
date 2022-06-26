import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Medicament } from '../model/Medicament';
import { Prescription } from '../model/Prescription';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {
url=environment.API_URL;
  constructor(private http:HttpClient) { }
  getAllMedicaments(){
   return this.http.get<Medicament[]>(this.url+'findAllMedicament');
  }
  addMedicament(m:Medicament ):any{
    return this.http.post<Medicament>( `${this.url}addMedicament`,m);
  
  
  }
  addPrescription(p:Prescription,nomMedicament:string,idOrdonance:string ):any{
    return this.http.post<Prescription>(`${this.url}prescrireMedicamentEtLePartagerAUneOrdonance/medicament/${nomMedicament}/ordonance/${idOrdonance}`,p);
  
  
  }
}
