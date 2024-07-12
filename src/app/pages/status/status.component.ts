import { Component } from '@angular/core';
import { ParkingService } from '../../services/parking.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Car, ParkingCarsRecord } from '../../models/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  providers:[ParkingService],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent {
  parkingStatus: any;
  smallParkingArea: ParkingCarsRecord | undefined;
  nonParkingArea: Car[] | undefined;

  constructor(private parkingService: ParkingService,private http:HttpClient,private router:Router) {}

  ngOnInit(): void {
    this.parkingService.getParkingStatus().subscribe(
      (data: any) => {
        this.parkingStatus = data;
        this.smallParkingArea = data.parkingArea.SMALL_CAR;
        this.nonParkingArea = data.nonParkingArea.nonParkingArea; 
      },
      (error) => {
        console.error('Error fetching parking status:', error);
      }
    );
  }

  confirmExitCar(carId: string) {
    if (window.confirm('Are you sure you want to exit this car?')) {
      this.exitCar(carId);
    }
  }

  exitCar(carId: string) {
    this.http.delete(`http://localhost:8080/parkings/exit/${carId}`, { responseType: 'text' })
      .subscribe(response => {
        console.log('Car exited successfully', response);
        this.router.navigateByUrl('/status').then(() => {
          window.location.reload();
        });
      }, error => {
        console.error('Error exiting car', error);
      });
  }
}
