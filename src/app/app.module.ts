import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AproposComponent } from './components/apropos/apropos.component';
import { ContactComponent } from './components/contact/contact.component';
import { ListeLivresComponent } from './components/liste-livres/liste-livres.component';
import { ErreurComponent } from './components/erreur/erreur.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { NomPipe } from './nom.pipe';
import { SelectedBookComponent } from './components/selected-book/selected-book.component';
import { AdminComponent } from './components/admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { MenuAdminComponent } from './components/dashboard/menu-admin/menu-admin.component';
import { GestLivresComponent } from './components/dashboard/gest-livres/gest-livres.component';
import { GesAchatsComponent } from './components/dashboard/ges-achats/ges-achats.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    AproposComponent,
    ContactComponent,
    ListeLivresComponent,
    ErreurComponent,
    AcceuilComponent,
    MenuComponent,
    NomPipe,
    SelectedBookComponent,
    AdminComponent,
    DashboardComponent,
    FooterComponent,
    MenuAdminComponent,
    GestLivresComponent,
    GesAchatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,Ng2SearchPipeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
