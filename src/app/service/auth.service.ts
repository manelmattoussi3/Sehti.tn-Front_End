import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";




@Injectable({providedIn: 'root'})
export class AuthService{
    

    constructor(
        private _httpClient: HttpClient,
    ){

    }

    signUp(formData: FormData): Observable<any>
    {
        return this._httpClient.post(`${environment.apiUrl}/auth/signup`, formData);
    }

}