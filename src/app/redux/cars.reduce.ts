import { Car } from '../components/car/car.model';
import { AddCar, CAR_ACTION } from './cars.action';

const initialState = {
  cars: [
    new Car('Ford', 'Focus', '12/12/2016', false, 1),
    new Car('Audi', 'R8', '01/22/2015', true, 2),
    new Car('BMW', 'I3', '10/22/2016', false, 3)
  ]
};

export function carsReducer(state = initialState, action: AddCar) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      };
    default:
      return state;
  }
}
