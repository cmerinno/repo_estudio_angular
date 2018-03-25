import { Component, OnInit } from '@angular/core';
import { Breed } from './breed';

@Component({
  selector: 'app-breed-local',
  templateUrl: './breed-local.component.html',
  styleUrls: ['./breed-local.component.css']
})
export class BreedLocalComponent implements OnInit {
  public breed: Breed;
  public breeds: Array<Breed>;
  public breed2: Breed;

  constructor() {
    this.breed = new Breed('', '');
    this.breeds = [
      new Breed ('Akita', 'url1'),
      new Breed ('Akita Americano', 'url2'),
      new Breed ('American Pitbull Terrier', 'url3')
    ];
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('My input: ');

  }


}
