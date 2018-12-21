import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from '@ngrx/store';
import { AppState } from './redux/app.state';
import { AddCar, DeleteCar, LoadCars, UpdateCar } from './redux/cars.action';
import { Car } from './components/car/car.model';

@Injectable()
export class CarsService {
  static BASE_URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient, private store: Store<AppState>) { }

  loadCars(): void {
    this.httpClient.get(CarsService.BASE_URL + 'cars')
      .subscribe((cars: Car[]) => this.store.dispatch(new LoadCars(cars)));
  }

  addCar(car: Car): void {
    this.httpClient.post(CarsService.BASE_URL + 'cars', car)
      .subscribe((newCar: Car) => this.store.dispatch(new AddCar(newCar)));
  }

  deleteCar(car: Car): void {
    this.httpClient.delete(CarsService.BASE_URL + 'cars/' + car.id.toString())
      .subscribe(() => this.store.dispatch(new DeleteCar(car)));
  }

  updateCar(car: Car): void {
    this.httpClient.put(CarsService.BASE_URL + 'cars/' + car.id, car)
      .subscribe((updatedCar: Car) => this.store.dispatch(new UpdateCar(updatedCar)));
  }
}
