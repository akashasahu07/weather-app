import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apikey = 'cd4a9b6fe7e641859c474632250602';
  private apiurl = 'https://api.weatherapi.com/v1/current.json/forecast.json';
  constructor() { }

  fetchWeather(searchCity: string): Promise<any> {
    return fetch(`${this.apiurl}?key=${this.apikey}&q=${searchCity}&days=5`)

    .then(response => {
      return response.json()
    })

    .then((data) => data)
  }
}