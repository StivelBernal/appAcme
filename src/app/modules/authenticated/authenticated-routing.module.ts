import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriversComponent } from './cruds/drivers/drivers.component';
import { OwnersComponent } from './cruds/owners/owners.component';
import { VehiclesComponent } from './cruds/vehicles/vehicles.component';
import { AuthenticatedComponent } from './authenticated.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticatedComponent,
    children: [
      {
        path: '',
        redirectTo: '/vehicles',
        pathMatch: 'full',
      },
      {
        path: 'vehicles',
        component: VehiclesComponent
      },
      {
        path: 'owners',
        component: OwnersComponent
      },
      {
        path: 'drivers',
        component: DriversComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticatedRoutingModule { }
