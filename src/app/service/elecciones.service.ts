import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Eleccion } from '../model/elecciones';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EleccionesServiceService extends GenericService //extiende de un servicio gneerico 
<Eleccion> {

  private eleccionChange = new Subject<Eleccion[]>;
  private messageChange = new Subject<string>;


  constructor(protected override http: HttpClient) {
    super(
      http,
      `${environment.HOST}/Elecciones2019`
      );
  }

 //////////getters y setter/////////////
 setEleccionChange(list: Eleccion[]){
  this.eleccionChange.next(list);
}

getEleccionChange(){
  return this.eleccionChange.asObservable();
}

setMessageChange(message: string){
  this.messageChange.next(message);
}

getMessageChange(){
  return this.messageChange.asObservable();
}

GetEleccion() {
  return this.http.get<Eleccion[]>(`${environment.HOST}/Elecciones2019/vista`);//definimos la api
}

}
