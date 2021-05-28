import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UtentiComponent } from './utenti/utenti.component';
import { ClientiComponent } from './clienti/clienti.component';
import { FattureComponent } from './fatture/fatture.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NuovoClienteComponent } from './clienti/nuovo-cliente/nuovo-cliente.component';
import { FatturaClienteComponent } from './clienti/fattura-cliente/fattura-cliente.component';
import { ModificaClienteComponent } from './clienti/modifica-cliente/modifica-cliente.component';
import { EliminaClienteComponent } from './clienti/elimina-cliente/elimina-cliente.component';
import { ModificaFatturaComponent } from './fatture/modifica-fattura/modifica-fattura.component';
import { EliminaFatturaComponent } from './fatture/elimina-fattura/elimina-fattura.component';
import { NuovaFatturaClienteComponent } from './clienti/fattura-cliente/nuova-fattura-cliente/nuova-fattura-cliente.component';
import { ModificaFatturaClienteComponent } from './clienti/fattura-cliente/modifica-fattura-cliente/modifica-fattura-cliente.component';
import { EliminaFatturaClienteComponent } from './clienti/fattura-cliente/elimina-fattura-cliente/elimina-fattura-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    UtentiComponent,
    ClientiComponent,
    FattureComponent,
    NuovoClienteComponent,
    FatturaClienteComponent,
    ModificaClienteComponent,
    EliminaClienteComponent,
    ModificaFatturaComponent,
    EliminaFatturaComponent,
    NuovaFatturaClienteComponent,
    ModificaFatturaClienteComponent,
    EliminaFatturaClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
