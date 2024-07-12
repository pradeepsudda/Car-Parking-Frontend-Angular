import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ParkingResponse } from '../../models/model';

@Component({
  selector: 'app-parkcar',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './parkcar.component.html',
  styleUrl: './parkcar.component.css'
})
export class ParkcarComponent {
  
  parkCarForm: FormGroup;
  message: string | undefined;
  responseSuccess: boolean | undefined;

  constructor(private fb: FormBuilder, private http: HttpClient,private router:Router) {
    this.parkCarForm = this.fb.group({
      carModelName: ['', Validators.required],
      carType: ['SMALL_CAR', Validators.required],
      isHandoverKeys: ['true', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.parkCarForm.valid) {
      this.http.post<ParkingResponse>('http://localhost:8080/parkings/entry', this.parkCarForm.value)
        .subscribe(response => {
          this.message = response.message;
          this.responseSuccess = response.success;
          if (response.success) {
            console.log('Car parked successfully', response);
            this.router.navigateByUrl('/status');
          } else {
            window.alert(this.message);
          }
        }, error => {
          window.alert(this.message);
          this.router.navigateByUrl('/status');
        });
    }
  }
  

}
