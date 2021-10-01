
import { DogService } from '../../../../sevices/dog.service';
import { Dog } from '../../../../models/dog';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-cadastrar-dog',
  templateUrl: './cadastrar-dog.component.html',
  styleUrls: ['./cadastrar-dog.component.css']
})
export class CadastrarDogComponent implements OnInit {

  nome!: string;
  idade!: number;
  raca !: string;
  cor! : string;
  status! : number;
  dono_id! : number;

  constructor(private service: DogService, private router: Router) {}

  ngOnInit(): void {
  }
  create(): void{
    let dog : Dog ={
      nome: this.nome,
      idade: this.idade,
      raca: this.raca,
      cor: this.cor,
      status: this.status,
      dono_id: this.dono_id,
    };
    this.service.create(dog).subscribe((dog) => {
      this.router.navigate([""]);
  });
  }

}
