import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValuesFromArray } from 'rxjs';

const PRUEBA_URL = ["http://localhost:8080"]

@Injectable({
  providedIn: 'root'
})
export class CocheService {

  constructor(private http: HttpClient) { }


  postCoche(coche: any): Observable<any> {
    return this.http.post(PRUEBA_URL + "/api/añadir", coche);
  }

  getAllCoche(): Observable<any> {
    return this.http.get(PRUEBA_URL + "/api/coches");
  }

  getCocheById(id: number): Observable<any> {
    return this.http.get(PRUEBA_URL + "/api/porid/" + id);
  }

  updateCoche(id: number, coche: any): Observable<any> {
    return this.http.put(PRUEBA_URL + "/api/actualizar/" + id,coche);
  }

  deleteCoche(id: number): Observable<any> {
    return this.http.delete(PRUEBA_URL + "/api/borrar/" + id);
  }

}
