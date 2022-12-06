import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Achat } from 'src/app/modeles/achat';
import { Produit } from 'src/app/modeles/produit';
import { AchatService } from 'src/app/service/achat.service';
import { LivreService } from 'src/app/service/livre.service';


@Component({
  selector: 'app-selected-book',
  templateUrl: './selected-book.component.html',
  styleUrls: ['./selected-book.component.css']
})
export class SelectedBookComponent implements OnInit {
  idLivres!:number;
  Selected!:Produit;
  affiche:boolean=false;
  achatForm!:FormGroup;
  afficheC:boolean=false;
  lesAchats!:Achat[];
  constructor(private activatedRoute:ActivatedRoute,
    private livreService:LivreService,
    private fb: FormBuilder,
    private achatService:AchatService) { }

  ngOnInit(): void {
    this.achatForm = this.fb.nonNullable.group({
      nom:[""],
      livre:[""],
      nombre:[""],
    });
    this.idLivres = this.activatedRoute.snapshot.params['id'];
  this.livreService.getLivreById(this.idLivres)
  .subscribe(date=>this.Selected=date);
  this.achatService.getAchats().subscribe(data=>this.lesAchats=data);

  }
afficher()
{
  this.affiche=true;
  this.afficheC=false;
}
afficherC()
{
  this.afficheC=true;
  this.affiche=false;

}
ajouterCommande() {
  this.achatService.ajouterAchat(this.achatForm.value).subscribe((data) =>
    this.lesAchats.push(data)
  );
  this.achatForm.reset();
  alert("Commande passé avec succées");
}
}
