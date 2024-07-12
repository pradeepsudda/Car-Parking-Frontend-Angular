import { Routes } from '@angular/router';
import { StatusComponent } from './pages/status/status.component';
import { ParkcarComponent } from './pages/parkcar/parkcar.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path:"",component:HomeComponent,title:"ParkHub"

    },
    {
        path:"status",component:StatusComponent,title:"status | ParkHub"
    },
    {
        path:"car-park",component:ParkcarComponent,title:"car-park | ParkHub"
    },

];
