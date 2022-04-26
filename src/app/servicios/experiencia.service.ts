import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../data/Experiencia';
import { map } from 'rxjs/operators';
import { config } from '../data/config/config';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http: HttpClient) { }

  obtenerDatosExperiencia(): Observable<Experiencia[]> {
    return this.http.get<any>("http://localhost:8080/ver/experiencia");
  }

  obtenerDatosExpriencia(): Experiencia[] {
    return [
     
      {
        "position": "Diseñadora Gráfica",
        "company": "Centro Gráfico PR",
        "img": "https://jacintoimpresores.com/wp-content/uploads/2015/03/logo-cruz.png",
        "mode": "Full Time",
        "start": "marzo 2004",
        "end": "enero 2005",
        "timeElapsed" : "1 año",
        "place": "Capital Federal"
      },
      {
        "position": "Diseñadora Gráfica",
        "company": "Imprenta Rosfer",
        "img": "https://imprenta-offset.com/wp-content/uploads/2016/11/logo-sin-texto.png",
        "mode": "Full Time",
        "start": "abril 2006",
        "end": "julio 2020",
        "timeElapsed" : "14 años",
        "place": "Capital Federal"
      }
      ]
    }
  }