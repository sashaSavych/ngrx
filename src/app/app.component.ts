import { Component, OnInit } from '@angular/core';
import { Car } from './components/car/car.model';
import { Store } from '@ngrx/store';
import { AppState } from './redux/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cars: Car[] = [];
  carsState$: Observable<AppState>;
  id = 4;

  constructor(private store: Store<Car[]>) {}

  ngOnInit() {
    this.carsState$ = this.store.select('carPage');
  }

  public onAdd(name: string, model: string): void {
    const newCar: Car = new Car(name, model, new Date().toLocaleDateString(), false, this.id);
    this.cars.push(newCar);

    this.id++;
  }

  public deleteCar(car: Car): void {
    this.cars = this.cars.filter(carItem => carItem.id !== car.id);
  }
}
