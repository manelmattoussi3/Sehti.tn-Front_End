import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OperationAnalyse } from '../model/OperationAnalyse';

@Injectable({
  providedIn: 'root'
})
export class AnayseService {
  url =environment.API_URL;
  constructor(private http:HttpClient) { }
  

 
getAnalyse(){
  return this.http.get<OperationAnalyse[]>(this.url+'findAnalyses');
}
addAnalyse(o:OperationAnalyse ,id:string):any{
  return this.http.post<OperationAnalyse>( `${this.url}PartagerAnalyse/${id}`,o);


}
}