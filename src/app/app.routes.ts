import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FindjobComponent } from './components/findjob/findjob.component';
import { NavbarComponent } from './components/navbar/navbar.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {path:'home',component:HomeComponent},
    {path:'findjob',component:FindjobComponent},
    {path:'navbar',component:NavbarComponent}
];
