import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormOwnerComponent } from './form/form.component';
import { URL_BACKEND } from 'src/app/config/config';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.scss']
})
export class OwnersComponent implements OnInit{
  load = false
  listItems: any[] = []

  constructor(private http: HttpClient, private dialog: MatDialog) { }
  
  ngOnInit(): void {
    // call vehicles
    this.getList()
  }

  getList() {
    this.http.get(URL_BACKEND + 'api/persons/owners').subscribe((data: any) => {
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


      const dialogRef = this.dialog.open(FormOwnerComponent, dialogConfig);

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
