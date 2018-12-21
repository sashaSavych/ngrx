import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from './redux/app.state';

import { Observable } from 'rxjs';

import { Car } from './components/car/car.model';
import { AddCar } from './redux/cars.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  carsState$: Observable<AppState>;
  id = 4;

  constructor(private store: Store<Car[]>) {}

  ngOnInit() {
    this.carsState$ = this.store.select('carPage');
  }

  public onAdd(name: string, model: string): void {
    ++this.id;
    const newCar: Car = new Car(name, model, new Date().toLocaleDateString(), false, this.id);
    this.store.dispatch(new AddCar(newCar));
  }
}
