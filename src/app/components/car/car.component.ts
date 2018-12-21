import { Component, Input } from '@angular/core';
import { Car } from './car.model';
import { AppState } from '../../redux/app.state';
import { Store } from '@ngrx/store';
import { DeleteCar, UpdateCar } from '../../redux/cars.action';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  @Input() car: Car;

  constructor(private store: Store<AppState>) {}

  public deleteCar(): void {
    this.store.dispatch(new DeleteCar(this.car));
  }

  public buyCar(): void {
    this.store.dispatch(new UpdateCar(this.car));
  }
}
