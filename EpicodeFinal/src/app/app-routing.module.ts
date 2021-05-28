import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientiComponent } from './clienti/clienti.component';
import { EliminaClienteComponent } from './clienti/elimina-cliente/elimina-cliente.component';
import { FatturaClienteComponent } from './clienti/fattura-cliente/fattura-cliente.component';
import { ModificaClienteComponent } from './clienti/modifica-cliente/modifica-cliente.component';
import { NuovoClienteComponent } from './clienti/nuovo-cliente/nuovo-cliente.component';
import { EliminaFatturaComponent } from './fatture/elimina-fattura/elimina-fattura.component';
import { FattureComponent } from './fatture/fatture.component';
import { ModificaFatturaComponent } from './fatture/modifica-fattura/modifica-fattura.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UtentiComponent } from './utenti/utenti.component';
import { NuovaFatturaClienteComponent } from './clienti/fattura-cliente/nuova-fattura-cliente/nuova-fattura-cliente.component';
import { ModificaFatturaClienteComponent } from './clienti/fattura-cliente/modifica-fattura-cliente/modifica-fattura-cliente.component';
import { EliminaFatturaClienteComponent } from './clienti/fattura-cliente/elimina-fattura-cliente/elimina-fattura-cliente.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'utenti', component: UtentiComponent },
  { path: 'clienti', component: ClientiComponent },
  { path: 'fatture', component: FattureComponent },
  { path: 'clienti/clienti/nuovo', component: NuovoClienteComponent },
  { path: 'clienti/clienti/modifica/:id', component: ModificaClienteComponent },
  { path: 'clienti/clienti/elimina/:id', component: EliminaClienteComponent },
  { path: 'clienti/clienti/fattura/:id', component: FatturaClienteComponent },
  { path: 'fatture/fatture/modifica/:id', component: ModificaFatturaComponent },
  { path: 'fatture/fatture/elimina/:id', component: EliminaFatturaComponent },
  { path: 'clienti/fattura/nuova', component: NuovaFatturaClienteComponent },
  { path: 'clienti/fattura/modifica/:id', component: ModificaFatturaClienteComponent },
  { path: 'clienti/fattura/elimina/:id', component: EliminaFatturaClienteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
