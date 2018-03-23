import { Component, OnInit } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  public car: Car;
  public cars: Array<Car>;

  constructor() {
    console.log('constructor');
    this.car = new Car('', '', 0, '');
    this.cars = [
      new Car('Mistsubichi', 'L200', 0, 'Black'),
      new Car('Nissan', '270z', 0, 'White')

    ];


  }

  ngOnInit() {
  }

  onSubmit() {
    
    this.cars.push(this.car);
    this.car = new Car('', '', 0, '');
  }

}
