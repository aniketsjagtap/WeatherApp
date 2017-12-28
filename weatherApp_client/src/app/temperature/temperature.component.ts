import { Component, OnInit } from '@angular/core';
import{Weather} from '../weather';
import { WeatherService} from '../weather.service';
import {Router} from '@angular/router';
import { error } from 'util';
import {City} from '../city';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

  weather : Weather[] = [];
  cities: City[];
  error : string;

 
  constructor(private weatherService : WeatherService,private router:Router) { }

  ngOnInit() {
    this.getCity();
   
  }

  

  /*getWeather() : void{
    this.weatherService.getWeather()
    .subscribe(weather => this.weather = weather);
   
     }*/
     getCity(){
      this.weatherService.getCity()
      .subscribe(cities => this.cities = cities);
     }
     getCityWeather(city){
       if(city){
        //using observables.

          ///this.weatherService.getCityWeather(city)
        //.subscribe(weather => this.weather = weather);

        //using asynch Promise
        this.weatherService.getCityWeather(city)
          .then(weather => this.weather = weather);
       }
     }

     clearTab(){
       this.weather = null;
      }

    }


}
