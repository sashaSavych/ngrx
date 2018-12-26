import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CAR_ACTION } from './cars.action';
import { Car } from '../components/car/car.model';
import { CarsService } from '../app.service';
import { switchMap, mergeMap } from 'rxjs/operators';

@Injectable()
export class CarsEffects {

  constructor(private actions$: Actions, private carsService: CarsService) {}

  @Effect() loadCars = this.actions$
    .pipe(
      ofType(CAR_ACTION.ADD_CAR),
      switchMap(() => {
        return this.carsService.preloadCars();
      }),
      mergeMap((cars: Car[]) => {
        return [
          {
            type: CAR_ACTION.LOAD_CARS,
            payload: cars
          }
          ];
      })
    );

}
