import { CadastrarDogComponent } from './components/views/dog/cadastrar-dog/cadastrar-dog.component';
import { ListarDogComponent } from './components/views/dog/listar-dog/listar-dog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: ListarDogComponent,
  },
  {
    path: "dog/listar",
    component: ListarDogComponent,
  },
  {
    path: "dog/cadastar",
    component: CadastrarDogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
