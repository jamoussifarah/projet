import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Achat } from '../modeles/achat';
const URL = 'http://localhost:3000/achat';

@Injectable({
  providedIn: 'root'
})
export class AchatService {

  constructor(private http:HttpClient) { }
  getAchats():Observable<Achat[]>{
    return this.http.get<Achat[]>(URL);
    }
    ajouterAchat(a:Achat):Observable<Achat>{
      return this.http.post<Achat>(URL,a);
    }
    supprimerAchat(id: number) {
      return this.http.delete(URL + '/' + id);
    }
    modifierAchat(id: Number, a: Achat): Observable<Achat> {
      return this.http.put<Achat>(URL + '/' + id, a);
    }
  
}
