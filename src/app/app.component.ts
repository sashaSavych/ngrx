import { Component } from '@angular/core';
import { Car } from './components/car/car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cars: Car[] = [
    new Car('Ford', 'Focus', '12/12/2016', false, 1),
    new Car('Audi', 'R8', '01/22/2015', true, 2),
    new Car('BMW', 'I3', '10/22/2016', false, 3)
  ];

  id = 4;

  public onAdd(name: string, model: string): void {
    const newCar: Car = new Car(name, model, new Date().toLocaleDateString(), false, this.id);
    this.cars.push(newCar);

    this.id++;
  }

  public deleteCar(car: Car): void {
    this.cars = this.cars.filter(carItem => carItem.id !== car.id);
  }
}
