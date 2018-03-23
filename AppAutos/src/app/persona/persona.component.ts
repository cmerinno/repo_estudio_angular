import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  public persona: Persona;
  public personas: Array<Persona>;

  constructor() {
    this.persona = new Persona('', '', '', '');
    this.personas = [
      new Persona('Jonathan', 'Saavedra', '16386916-0', 'jonathan.saavedra08@gmail.com'),
      new Persona('Daniela', 'Ruiz', '16556616-5', 'daniela.rodriguez@gmail.com')
    ];


  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('llamo');
    this.personas.push(this.persona);
    this.persona = new Persona('', '', '', '');
  }

}
