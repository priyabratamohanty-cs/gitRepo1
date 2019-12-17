import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/events',
    pathMatch:'full'
  },
  {
    path:'events',
    component:EventsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'special',
    component:SpecialEventsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'register',
    component:RegistrationComponent
  },
  {
    path:'login',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
