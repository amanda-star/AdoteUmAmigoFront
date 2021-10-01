import { Dog } from '../../../../models/dog';
import { DogService } from '../../../../sevices/dog.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-listar-dog',
  templateUrl: './listar-dog.component.html',
  styleUrls: ['./listar-dog.component.css']
})
export class ListarDogComponent implements OnInit {

  dogs : Dog[]= [];
  constructor(private service: DogService){
  }
  ngOnInit(): void {
    this.service.list().subscribe(dogs => {
      this.dogs = dogs;
      console.log(dogs);
    })
  }

}
