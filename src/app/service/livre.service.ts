import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../modeles/produit';
const URL = 'http://localhost:3000/produit';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  constructor(private http:HttpClient) { }
  getProduits():Observable<Produit[]>{
    return this.http.get<Produit[]>(URL);
    }
   getLivreById(id:number):Observable<Produit>{
      return this.http.get<Produit>(`${URL}/${id}`);
    }
    ajouterLivre(livre:Produit):Observable<Produit>{
      return this.http.post<Produit>(URL,livre);
    }
    supprimerLivre(id: Number) {
      return this.http.delete(URL + '/' + id);
    }
    modifierLivre(id: Number, l: Produit): Observable<Produit> {
      return this.http.put<Produit>(URL + '/' + id, l);
    }
    getLivreByName(nom:string):Observable<Produit[]>{
      return this.http.get<Produit[]>(`${URL}/?libelle=${nom}`);
    }
}