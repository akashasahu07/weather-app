import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather';

  heading: string = "weather app"
  searchCity: string = ""
  displayCity: string = ""
  temp_c: string = ""
  w_speed: string = ""
  name: string = ""
  region: string = ""
  icon: string = ""

  constructor(private weather: WeatherService) { }

  myFun() {
    this.weather.checkWeather(this.searchCity)
  }
}
