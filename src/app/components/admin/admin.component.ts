import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/modeles/admin';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
infos!:Admin;
adminForm!: FormGroup;
  constructor(private http:HttpClient,
    private serviceAdmin:AdminService,
    private fb:FormBuilder,
    private routerAdmin:Router) { }

  ngOnInit(): void {
this.serviceAdmin.getInfosAdmin().subscribe(data=>this.infos=data)
this.adminForm=this.fb.nonNullable.group({
  login:["login"],
  password:["*******"]
})
  }
onAuthentifier()
{ 
if (this.adminForm.controls['login'].value==this.infos.login &&
this.adminForm.controls['password'].value==this.infos.password)
{this.routerAdmin.navigate(['/dashboard']);
this.serviceAdmin.auth=true;
}
else 
alert("Veuillez réesseyez!!");
}
}
