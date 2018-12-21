import { Car } from '../components/car/car.model';
import { CAR_ACTION, CarsAction } from './cars.action';

const initialState = {
  cars: [
    new Car('Ford', 'Focus', '12/12/2016', false, 1),
    new Car('Audi', 'R8', '01/22/2015', true, 2),
    new Car('BMW', 'I3', '10/22/2016', false, 3)
  ]
};

export function carsReducer(state = initialState, action: CarsAction) {
  switch (action.type) {
    case CAR_ACTION.ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload]
      };
    case CAR_ACTION.DELETE_CAR:
      return {
        ...state,
        cars: [...state.cars.filter(car => car.id !== action.payload.id)]
      };
    case CAR_ACTION.UPDATE_CAR:
      const targetCarIndex = state.cars.findIndex(car => car.id === action.payload.id);
      state.cars[targetCarIndex].isSold = !state.cars[targetCarIndex].isSold;
      return {
        ...state,
        cars: [...state.cars]
      };
    default:
      return state;
  }
}
