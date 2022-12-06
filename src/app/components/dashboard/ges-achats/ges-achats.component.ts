import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Achat } from 'src/app/modeles/achat';
import { AchatService } from 'src/app/service/achat.service';
import { Ng2SearchPipeModule    } from 'ng2-search-filter/src/ng2-filter.module';

@Component({
  selector: 'app-ges-achats',
  templateUrl: './ges-achats.component.html',
  styleUrls: ['./ges-achats.component.css']
})
export class GesAchatsComponent implements OnInit {
  achatForm!:FormGroup;
  lesAchats!:Achat[];
  s!:string;
  f!:FormGroup;
  constructor( private achatService:AchatService,private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.achatForm = this.fb.nonNullable.group({
      nom:[""],
      livre:[""],
      nombre:[""],
    });
    this.f=this.fb.group(
      {
     recherche:['']
      }
)
    this.achatService.getAchats().subscribe(data=>this.lesAchats=data);
  }
  deleteAchat(id1: number) {
    this.achatService.supprimerAchat(id1).subscribe(
      (data) => (this.lesAchats = this.lesAchats.filter((alt) => alt.id != id1))
    );
  }
}
