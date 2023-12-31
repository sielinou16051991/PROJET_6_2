import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {FicheLogementComponent} from './pages/fiche-logement/fiche-logement.component';
import {ErrorComponent} from './pages/error/error.component';
import {ErrorPageComponent} from "./components/error-page/error-page.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'logement/:id', component: FicheLogementComponent},
  {path: '404', component: ErrorPageComponent},
  {path: '**', redirectTo: '404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
