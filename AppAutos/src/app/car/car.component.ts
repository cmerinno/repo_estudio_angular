import { Component, OnInit } from '@angular/core';
import { Car } from './car';
import { RequestService} from '../services/request.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [RequestService]
})
export class CarComponent implements OnInit {
  public car: Car;
  public cars: Array<Car>;

  constructor(private _request: RequestService) {
    this.car = new Car('', '', 0, '');
    this.cars = [
      new Car('Mistsubichi', 'L200', 0, 'Black'),
      new Car('Nissan', '270z', 0, 'White')

    ];


  }

  ngOnInit() {
    this._request.getCars().subscribe(
      result => {
        this.cars = result;

        if (!this.cars) {
          console.log('Server error');
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage);
      }

    );
  }

  onSubmit() {
    this.cars.push(this.car);
    this.car = new Car('', '', 0, '');
  }

}
