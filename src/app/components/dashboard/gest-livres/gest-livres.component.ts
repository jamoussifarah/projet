import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Produit } from 'src/app/modeles/produit';
import { LivreService } from 'src/app/service/livre.service';
import { Ng2SearchPipeModule    } from 'ng2-search-filter/src/ng2-filter.module';

@Component({
  selector: 'app-gest-livres',
  templateUrl: './gest-livres.component.html',
  styleUrls: ['./gest-livres.component.css']
})
export class GestLivresComponent implements OnInit {
  lesLivres!:Produit[];
  livreForm!: FormGroup;

  constructor(private serviceLivre:LivreService,private livreService:LivreService,
    private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.livreForm = this.fb.nonNullable.group({
      id:[""],
      libelle:[""],
      auteur:[""],
      img:[""],
      datePublication: [""],
      prix : ["0"],
      disponible: [false],
      comments:this.fb.array([])
    });
    this.serviceLivre.getProduits().subscribe(data=>this.lesLivres=data);
  }
  addLiv() {
    this.serviceLivre.ajouterLivre(this.livreForm.value).subscribe((data) =>
      this.lesLivres.push(data)
    );
  }
  deleteLiv(id: Number) {
    this.serviceLivre.supprimerLivre(id).subscribe(
      (data) => (this.lesLivres = this.lesLivres.filter((alt) => alt.id != id))
    );}
    modifier(id: Number) {
      this.serviceLivre.modifierLivre(id, this.livreForm.value).subscribe((data) => {
        let indice = this.lesLivres.findIndex((alt) => alt.id == id);
        this.lesLivres[indice] = this.livreForm.value;
        this.lesLivres[indice].id = data.id;
      });
    }
    public get comments()
    {
      return this.livreForm.get('comments') as FormArray;
    }
    onAjouterCommentaire(){
      this.comments.push(this.fb.control(''));
    }
    recherche(name:string){
      this.livreService.getLivreByName(name.toLowerCase())
        .subscribe (data => this.lesLivres = data);
        
  }
}
