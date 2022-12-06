import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../modeles/admin';
const URL="http://localhost:3000/admin";
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  getInfosAdmin():Observable<Admin>{
    return this.http.get<Admin>(URL);
  }
  modifierMdp( mdp:Admin): Observable<Admin> {
    return this.http.put<Admin>(URL,mdp);}
    auth!:boolean;

  constructor(private http:HttpClient) { }
}
