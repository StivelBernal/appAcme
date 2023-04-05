import { Component, OnInit } from '@angular/core';
import { FormVehicleComponent } from './form/form.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { URL_BACKEND } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit{
  load = false
  listItems: any[] = []

  constructor(private http: HttpClient, private dialog: MatDialog) { }
  
  ngOnInit(): void {
    // call vehicles
    this.getList()
  }

  getList() {
    this.http.get(URL_BACKEND + 'api/vehicles/all').subscribe((data: any) => {
      this.listItems = data.vehicles
    }, () => {});
  }
  
  create() {
    this.load = true

    const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true
      dialogConfig.autoFocus = true
      dialogConfig.minWidth = 400
      dialogConfig.minHeight = 400


      const dialogRef = this.dialog.open(FormVehicleComponent, dialogConfig);

      dialogRef.afterClosed().subscribe(
          data => {
            console.log("Dialog output:", data)
            if(data?.vehicle) {
              this.getList()
            }
          }
      ); 

  }


}
