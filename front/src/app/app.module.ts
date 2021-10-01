import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
//Onde fica imports internos
import { AppComponent } from './app.component';
import { ListarDogComponent } from './components/views/dog/listar-dog/listar-dog.component';
import { CadastrarDogComponent } from './components/views/dog/cadastrar-dog/cadastrar-dog.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarDogComponent,
    CadastrarDogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
