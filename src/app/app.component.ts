import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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


  showCity() {
    this.displayCity = this.searchCity

    fetch(`http://api.weatherapi.com/v1/current.json?key=cd4a9b6fe7e641859c474632250602&q=${this.displayCity}`)
      .then((response) => response.json())

      .then((data) => {
        this.name = "Name: " + data.location.name
        this.icon = data.current.condition.icon
        this.region = "Region: " + data.location.region
        this.temp_c = "Temperature: " + data.current.temp_c + " C"
        this.w_speed = "Wind Speed: " + data.current.wind_kph + " kph"
      })
  }
}
