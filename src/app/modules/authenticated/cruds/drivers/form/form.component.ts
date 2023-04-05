import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CrudService, PersonI } from '../../crud.service';

@Component({
  selector: 'app-form-driver',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormDriverComponent {

  first_name: string = ''
  last_name: string = ''
  document_number: string = ''
  phone: string = ''
  address: string = ''
  city: string = ''

  constructor(
    private dialogRef: MatDialogRef<FormDriverComponent>, 
    public crudService:CrudService,
    ) {
      
  }

  save() {

    const data: PersonI = {
      first_name: this.first_name,
      last_name: this.last_name,
      document_number: this.document_number,
      city: this.city,
      phone: this.phone,
      address: this.address,
      type: 'driver'
    }

    this.crudService.createPerson(data).subscribe((resp:any) => {
      console.log('🚀 ~ file: form.component.ts:38 ~ FormDriverComponent ~ this.crudService.createPerson ~ resp:', resp)
      if(resp?.person ) {
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
