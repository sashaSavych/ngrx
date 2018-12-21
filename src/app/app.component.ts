import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './redux/app.state';

import { Observable } from 'rxjs';

import { Car } from './components/car/car.model';
import { CarsService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  carsState$: Observable<AppState>;

  constructor(private store: Store<Car[]>, private carsService: CarsService) {}

  ngOnInit() {
    this.carsState$ = this.store.select('carPage');
  }

  public onAdd(name: string, model: string): void {
    const newCar: Car = new Car(name, model, new Date().toLocaleDateString());
    this.carsService.addCar(newCar);
  }

  public onLoad(): void {
    this.carsService.loadCars();
  }
}
