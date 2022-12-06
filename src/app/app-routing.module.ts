import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { AdminComponent } from './components/admin/admin.component';
import { AproposComponent } from './components/apropos/apropos.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GesAchatsComponent } from './components/dashboard/ges-achats/ges-achats.component';
import { GestLivresComponent } from './components/dashboard/gest-livres/gest-livres.component';
import { ErreurComponent } from './components/erreur/erreur.component';
import { ListeLivresComponent } from './components/liste-livres/liste-livres.component';
import { SelectedBookComponent } from './components/selected-book/selected-book.component';

const routes:Routes =[
  {path:'', redirectTo:'acceuil', pathMatch:'full'},

  {path:'apropos',title:'Apropos', component:AproposComponent},
  {path:'acceuil',title:'acceuil', component:AcceuilComponent},
  {path:'contact',title:'Contact', component:ContactComponent},
  {path:'livres',title:'Livres', component:ListeLivresComponent},
  {path:'livres/:id',title:'Produit choisi', component:SelectedBookComponent},
  {path:"admin",component:AdminComponent},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthGuard]},
{path:'gestlivre',component:GestLivresComponent},
{path:'gestachats',component:GesAchatsComponent},

  ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
