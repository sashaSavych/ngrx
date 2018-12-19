import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from './car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  @Input() car: Car;
  @Output() deleteCar = new EventEmitter<Car>();

  public onDeleteCar(car: Car): void {
    this.deleteCar.emit(car);
  }
}
