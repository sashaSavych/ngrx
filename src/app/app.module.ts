import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CarsEffects } from './redux/cars.effects';
import { StoreModule } from '@ngrx/store';
import { carsReducer } from './redux/cars.reducer';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { CarsService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([CarsEffects]),
    StoreModule.forRoot({carPage: carsReducer}),
    HttpClientModule,
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
