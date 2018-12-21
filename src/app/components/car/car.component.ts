import { Component, Input } from '@angular/core';
import { Car } from './car.model';
import { CarsService } from '../../app.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  @Input() car: Car;

  constructor(private carsService: CarsService) {}

  public deleteCar(): void {
    this.carsService.deleteCar(this.car);
  }

  public buyCar(): void {
    this.car.isSold = !this.car.isSold;
    this.carsService.updateCar(this.car);
  }
}
