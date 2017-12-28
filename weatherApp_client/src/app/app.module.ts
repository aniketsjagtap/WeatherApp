import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { WeatherService } from './weather.service';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { MessageService } from './message.service';
import { MessageComponent } from './message/message.component';


const appRoutes : Routes = [
  {
    path : '',
    component : AppComponent
  },
  {
    path : 'temperature',
    component : TemperatureComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    TemperatureComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WeatherService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
