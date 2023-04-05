import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_BACKEND } from 'src/app/config/config';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormDriverComponent } from './form/form.component';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit{
  load = false
  listItems: any[] = []

  constructor(private http: HttpClient, private dialog: MatDialog) { }
  
  ngOnInit(): void {
    // call vehicles
    this.getList()
  }

  getList() {
    this.http.get(URL_BACKEND + 'api/persons/drivers').subscribe((data: any) => {
      this.listItems = data.persons
    }, () => {});
  }
  
  create() {
    this.load = true

    const dialogConfig = new MatDialogConfig();

      dialogConfig.disableClose = true
      dialogConfig.autoFocus = true
      dialogConfig.minWidth = 400
      dialogConfig.minHeight = 400

      const dialogRef = this.dialog.open(FormDriverComponent, dialogConfig);

      dialogRef.afterClosed().subscribe(
          data => {
            console.log("Dialog output:", data)
            if(data?.person) {
              this.getList()
            }
          }
      ); 

  }

}