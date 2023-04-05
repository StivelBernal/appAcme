import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CrudService, VehicleI } from '../../crud.service';

@Component({
  selector: 'app-form-vehicle',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormVehicleComponent {

  placa: string = ''
  color: string = ''
  owner_id: number = 0
  driver_id: number = 0
  type: any = ''
  ownerList: any[] = []
  driverList: any[] = []



  constructor(
    private dialogRef: MatDialogRef<FormVehicleComponent>, 
    public crudService:CrudService,
    ) {}

  ngOnInit(): void {
    this.getListPersons()
  }

  getListPersons() {
    
    this.crudService.getListPersons().subscribe((resp:any) => {
      resp.persons.forEach((x: any) => {
          if(x.type === 'owner') this.ownerList.push(x)
          if(x.type === 'driver') this.driverList.push(x)
      });
      console.log('🚀 ~ file: form.component.ts:38 ~ FormVehicleComponent ~ this.crudService.createPerson ~ resp:', resp)
    })

  }
  save() {

    const data: VehicleI = {
      placa: this.placa,
      color: this.color,
      type: this.type,
      owner_id: this.owner_id,
      driver_id: this.driver_id
    }

    this.crudService.createVehicle(data).subscribe((resp:any) => {
      console.log('🚀 ~ file: form.component.ts:38 ~ FormVehicleComponent ~ this.crudService.createPerson ~ resp:', resp)
      if(resp?.vehicle ) {
        this.dialogRef.close(resp)
      } else {
        alert('Error creando el registro')
      }

    })
  }

  close() {
    this.dialogRef.close()
  }
}
