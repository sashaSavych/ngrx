import { Car } from '../components/car/car.model';

export interface AppState {
  carPage: {
    cars: Car[]
  };
}

