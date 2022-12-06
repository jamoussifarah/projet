import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Achat } from 'src/app/modeles/achat';
import { Admin } from 'src/app/modeles/admin';
import { Produit } from 'src/app/modeles/produit';
import { AchatService } from 'src/app/service/achat.service';
import { AdminService } from 'src/app/service/admin.service';
import { LivreService } from 'src/app/service/livre.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit { 
infos!:Admin;
adminForm!: FormGroup;
test:boolean=false;

  constructor(private serviceadmin:AdminService,
    private fb:FormBuilder,
    ) { }

  ngOnInit(): void {
    this.serviceadmin.getInfosAdmin().subscribe (data => this.infos = data);
    this.adminForm=this.fb.nonNullable.group({
      login:["farah"],
      password:["*******"]
    })
  }
  modifier()
  {
this.serviceadmin.modifierMdp(this.adminForm.value).subscribe();
  }
  changer()
  {
    this.test=true;
  }  
}
