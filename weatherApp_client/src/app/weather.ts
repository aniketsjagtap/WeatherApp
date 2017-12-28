export class Weather{
  
        LocalObservationDateTime :any; //"2017-12-27T17:05:00+05:30";
        EpochTime : number;//1514374500,
        WeatherText : any; // "Overcast",
        WeatherIcon :number // 8,
        IsDayTime :boolean;// true,
        Temperature: object;
         MobileLink : string ;//"http://m.accuweather.com/en/in/mumbai/204842/current-weather/204842?lang=en-us",
         Link : string;//"http://www.accuweather.com/en/in/mumbai/204842/current-weather/204842?lang=en-us"
  


    
        
        constructor(LocalObservationDateTime,EpochTime,WeatherText,WeatherIcon,IsDayTime,Temperature,MobileLink,Link){
            this.LocalObservationDateTime = LocalObservationDateTime;
            this.EpochTime = EpochTime;
            this.WeatherText = WeatherText; 
            this.IsDayTime = IsDayTime;
            this.Temperature = Temperature;
            this.MobileLink = MobileLink ;
            this.Link = Link;
         
     }
 }