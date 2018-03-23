import { Component, OnInit } from '@angular/core';
import { Perro } from './perro';

@Component({
  selector: 'app-perro',
  templateUrl: './perro.component.html',
  styleUrls: ['./perro.component.css']
})
export class PerroComponent implements OnInit {
  public breed: Perro;
  public breeds: Array<Perro>;

  constructor() { 

    this.breed = new Perro(null, null);
    this.breeds = [
      new Perro('african', ['https:\/\/dog.ceo\/api\/img\/african\/n02116738_10024.jpg', 'https:\/\/dog.ceo\/api\/img\/african\/n02116738_10038.jpg', 'https:\/\/dog.ceo\/api\/img\/african\/n02116738_10081.jpg']),
      new Perro('akita', null)
    ];


  }

  ngOnInit() {
  }

}
