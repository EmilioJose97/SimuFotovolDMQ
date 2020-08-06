import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../Model/registro';

@Injectable({
  providedIn: 'root'
})
export class RadService {
 
  API_URI;
  API_URI2 = 'https://server-simulador-fotovoltaico.herokuapp.com/registro';
  Manual = "assets/img/Manual.pdf";

  constructor(private http: HttpClient) { }

  export() {
    return this.http.get(this.Manual, 
        {responseType: 'blob'});
}

  recibirDatos(tabla) {
    //hacer lo que sea con los datos recibidos del componente
    this.API_URI = 'https://server-simulador-fotovoltaico.herokuapp.com/tmy'+ tabla;
  };
  
  getRegistro() {
    return this.http.get(`${this.API_URI2}`);
  };
  
  getRad() {
    return this.http.get(`${this.API_URI}`)
  };

  saveData(data: Data) {
    return this.http.post(`${this.API_URI2}`, data);
  }

  };
