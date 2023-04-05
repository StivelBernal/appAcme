import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { URL_BACKEND } from 'src/app/config/config';
import { map , catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private http: HttpClient
  ) {}

  createPerson(person: PersonI){
    let URL = URL_BACKEND + 'api/persons/add ';
    return this.http.post(URL,person).pipe(
      map((resp:any) => {
        return resp
      }),
      catchError((err:any) => {
        return of(err);
      })
    );
  }

  getListPersons(){
    return this.http.get(URL_BACKEND + 'api/persons/all ')
  }

  createVehicle(vehicle: VehicleI){
    let URL = URL_BACKEND + 'api/vehicles/add ';
    return this.http.post(URL,vehicle).pipe(
      map((resp:any) => {
        return resp
      }),
      catchError((err:any) => {
        return of(err);
      })
    );
  }
}

export interface PersonI {
  first_name: string,
  last_name: string,
  document_number: string,
  address: string,
  phone: string,
  city: string,
  type: 'driver'|'owner'
} 

export interface VehicleI {
  owner_id: number,
  driver_id: number,
  placa: string,
  color: string,
  type: 'private'|'public'
}
