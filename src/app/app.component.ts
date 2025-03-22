import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather';

  heading: string = "weather app"
  searchCity: string = ""
  displayCity: string = ""
  city_name: string = ""
  region: string = ""
  country: string = ""
  time: string = ""
  icon: string = ""
  temp_c: string = ""
  sky: string = ""
  feelslike_c: string = ""
  wind: string = ""
  pressure: string = ""
  humidity: string = ""
  dewpoint_c:string = ""

  defaultCity: string = "Berhampur"; // 🔹 Set a default city

  backgroundImage: string = "";
  textColor: string = "";

  constructor(private weather: WeatherService) { }

  ngOnInit() {
    // 🔹 Fetch default city weather when the app loads
    this.checkWeather(this.defaultCity);
  }

  checkWeather(city?: string) {
    const cityToSearch = city || this.searchCity.trim();
    if (!cityToSearch) return;

    this.weather.fetchWeather(cityToSearch)
      .then(data => {
        this.displayCity = this.searchCity
        this.city_name = data.location.name
        this.region = data.location.region
        this.country = data.location.country
        this.time = data.location.localtime
        this.icon = data.current.condition.icon
        this.temp_c = data.current.temp_c
        this.sky = data.current.condition.text
        this.feelslike_c = "Feels like " + data.current.feelslike_c
        this.wind = data.current.wind_kph + " km/h"
        this.pressure = data.current.pressure_mb + " mb"
        this.humidity = data.current.humidity
        this.dewpoint_c = data.current.dewpoint_c

        this.updateBackground(data);

      });
  }

  updateBackground(data: any) {
    const condition = data.current.condition.text.toLowerCase();
    const isDay = data.current.is_day;

    if (condition.includes('rain')) {
      this.backgroundImage = "url('rainy.jpg')";
      this.textColor = "#ffffff"; // White text
    } else if (condition.includes('clear')) {
      this.backgroundImage = isDay ? "url('sunny.jpg')" : "url('clear-night.jpg')";
      this.textColor = isDay ? "#000000" : "#ffffff";
    } else if (condition.includes('cloud')) {
      this.backgroundImage = isDay ? "url('cloudy-day.jpg')" : "url('cloudy-night.jpg')";
      this.textColor = isDay ? "#000" : "#fff";
    } else {
      this.backgroundImage = "url('default.jpg')";
      this.textColor = "#ffffff";
    }
  }
}
