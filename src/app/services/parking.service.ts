import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ParkingService {
  private apiUrl = 'http://localhost:8080/parkings';

  constructor(private http: HttpClient) {}

  getParkingStatus(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}
