import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ListeDemandeComponent } from './liste-demande/liste-demande.component';
import { ListMembreComponent } from './list-membre/list-membre.component';



const routes: Routes = [

  { path: 'home', component:  IndexComponent },
  { path: 'login', component:  LoginComponent },
  { path: 'listeMembre', component:  ListMembreComponent },
  { path: 'listeDemande', component:  ListeDemandeComponent },




  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
