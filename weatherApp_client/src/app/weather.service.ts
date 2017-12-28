import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';

import { Weather } from './weather';
import { MessageService } from './message.service';
import {City} from './city';
import {Cities} from './city-list';


import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { resolve } from 'q';
import { stringify } from '@angular/core/src/util';

@Injectable()
export class WeatherService {

  url = "http://localhost:3000/users";

  constructor(private messageService: MessageService,private http:Http) { }
  /* getWeather(): Observable<Weather[]> {
    this.messageService.add('WeatherService: fetched Weather Information !');
    return this.http.get(this.url)
    .map(this.extractData)
    .catch(this.handleErrorObservable);
    
  }
 getCityWeather(city:any) : Observable<Weather[]>{
    this.messageService.add('WeatherService: fetched Weather Information for city : '+ city);
    return this.http.get(this.url+"?city="+city)
             .map(this.extractData)
             .catch(this.handleErrorObservable);
 }

  private extractData(res: Response) {
   
    let body = res.json();
    console.log(body);
          return body || {};
      }

  private handleErrorObservable (error: Response | any) {
    this.messageService.add('Error in ItemsService: '+ (error.message || error));
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
*/

 getCity():Observable<City[]>{
   return of(Cities);

 }
 getCityWeather(city:any) : Promise<Weather[]>{
   return new Promise ((resolve,reject)=> {
   
     this.http.get(this.url+"?city="+city.code)
        .toPromise()
        .then(
          res => {
           this.messageService.add('Fetched Weather Data for : '+ city.name);
           // this.messageService.add(res.json());
             console.log(res.json());
              resolve(res.json());
              //return res.json()
           
          }
        ).catch(err=>{
          this.messageService.add('Error in fetching Weather Data  for : '+ city.name);
          this.messageService.add('Error Details: '+JSON.stringify(err.json()));
          console.log("Error: "+ JSON.stringify(err.json()));
        })
        
   });
 }

 

}
