import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OperationRadio } from '../model/OperationRadio';

@Injectable({
  providedIn: 'root'
})
export class RadioService {
  url =environment.API_URL;
  constructor(private http:HttpClient) { }
  getAllRadio(){
    return this.http.get<OperationRadio[]>(this.url+'findAllRadio')
  }
  addRadio(r:OperationRadio ,id:string):any{
    return this.http.post<OperationRadio>( `${this.url}PartagerRadio/${id}`,r);
  
  
  }
}
