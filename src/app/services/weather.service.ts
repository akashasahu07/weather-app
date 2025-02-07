import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  temp_c: string = ""
  constructor() { }

  checkWeather(searchCity: string) {

    fetch(`http://api.weatherapi.com/v1/current.json?key=cd4a9b6fe7e641859c474632250602&q=${searchCity}`)
      .then((response) => response.json())

      .then((data) => {
        console.log(data)
        this.temp_c = "Temperature: " + data.current.temp_c
      })
  }
}