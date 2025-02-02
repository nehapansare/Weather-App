import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], 
  providers: [WeatherService], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  city: string = '';
  weather: any;

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    if (this.city) {
      this.weatherService.getWeather(this.city).subscribe(
        (data) => (this.weather = data),
        (error) => alert('City not found! Please enter a valid city name.')
      );
    }
  }
}
