import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './shared/menu/menu.component';
import { DriversComponent } from './cruds/drivers/drivers.component';
import { OwnersComponent } from './cruds/owners/owners.component';
import { VehiclesComponent } from './cruds/vehicles/vehicles.component';
import { AuthenticatedComponent } from './authenticated.component';
import { AuthenticatedRoutingModule } from './authenticated-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TopBarComponent } from './shared/top-bar/top-bar.component';
import { FormDriverComponent } from './cruds/drivers/form/form.component';
import { FormOwnerComponent } from './cruds/owners/form/form.component';
import { FormVehicleComponent } from './cruds/vehicles/form/form.component';



@NgModule({
  declarations: [
    MenuComponent,
    DriversComponent,
    OwnersComponent,
    VehiclesComponent,
    AuthenticatedComponent,
    TopBarComponent,
    FormDriverComponent,
    FormOwnerComponent,
    FormVehicleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AuthenticatedRoutingModule
  ]
})
export class AuthenticatedModule { }
