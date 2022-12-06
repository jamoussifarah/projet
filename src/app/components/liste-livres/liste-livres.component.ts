import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Produit } from 'src/app/modeles/produit';
import { LivreService } from 'src/app/service/livre.service';
import { Ng2SearchPipeModule    } from 'ng2-search-filter/src/ng2-filter.module';
@Component({
  selector: 'app-liste-livres',
  templateUrl: './liste-livres.component.html',
  styleUrls: ['./liste-livres.component.css']
})
export class ListeLivresComponent implements OnInit {
  lesLivres!:Produit[];
  leLivre!:Produit;
  constructor(private livreService:LivreService,
    private fb:FormBuilder) { }
    f!:FormGroup;
   id1!:number;
   searchText!:string;
  ngOnInit(): void {
    this.livreService.getProduits()
 .subscribe (data => this.lesLivres = data);
 this.f=this.fb.group(
         {
        recherche:['']
         }
 )
  }
  recherche(name:string){
    this.livreService.getLivreByName(name.toLowerCase())
      .subscribe (data => this.lesLivres = data);
      
}
}
