import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ordonance } from '../model/Ordonance';

@Injectable({
  providedIn: 'root'
})
export class OrdonanceService {
  url =environment.API_URL;
  constructor(private http:HttpClient) { }
  getOrdonance(idOrdonance: number): Observable<any>{
    return this.http.get<Ordonance[]>(this.url+'findOrdonanceById/'+idOrdonance);
  }
  getAllOrdonances():any{
    return this.http.get<any>(this.url+'findAllOrdonances');
  }
}
