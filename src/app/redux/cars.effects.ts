import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { AddCar, CAR_ACTION } from './cars.action';
import { Observable } from 'rxjs';
import { Car } from '../components/car/car.model';

@Injectable
export class CarsEffects {

  constructor(private actions$: Actions) {}

/*  @Effect() loadCars = this.actions$.ofType(CAR_ACTION.ADD_CAR)
    .switchMap((action: AddCar) => {
      return Observable
    })
    .mergeMap((cars: Car[]) => {
      return [
        {
          type: CAR_ACTION.LOAD_CARS,
          payload: cars
        }
      ];
    });*/
}
