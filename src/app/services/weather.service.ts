import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // ✅ Import HttpClient
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root', // ✅ Ensure this is set
})
export class WeatherService {
  private apiKey = '880fecfeda5222a14214e78e27ddbf84';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`);
  }
}
