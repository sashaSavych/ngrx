import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { carsReducer } from './redux/cars.reducer';

import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({carPage: carsReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
