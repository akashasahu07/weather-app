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

  showCity() {
    this.displayCity = "Showing Data for: " +this.searchCity
  }
}
