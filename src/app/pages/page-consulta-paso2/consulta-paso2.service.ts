import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HandleError } from 'src/app/http-error-handler.service';
import { environment } from 'src/environments/environment';
import { Continente, Departamento, Medio, Pais, Via } from './consulta-paso2';

@Injectable({
  providedIn: 'root'
})
export class ConsultaPaso2Service {
  apiUrlCualitativas = `${environment.apiURL}/cualitativas`;
  apiUrlDepartamento = `${environment.apiURL}/departamentos`;
  apiUrlPais = `${environment.apiURL}/pais`;
  apiUrlMedio = `${environment.apiURL}/medios`;
  apiUrlVia = `${environment.apiURL}/vias`;

  private handleError: HandleError;

  constructor(private http: HttpClient) { }

  getCualitativas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlCualitativas)
      .pipe(
        //catchError(this.handleError('getFlujos', []))
      );
  }

  getDepartamentos(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(this.apiUrlDepartamento)
      .pipe(
        //catchError(this.handleError('getFlujos', []))
      );
  }
  getPaises(): Observable<Pais[]> {
    return this.http.get<Pais[]>(this.apiUrlPais+'/paises')
      .pipe(
        //catchError(this.handleError('getFlujos', []))
      );
  }

  getContinentes(): Observable<Continente[]> {
    return this.http.get<Continente[]>(this.apiUrlPais+'/continentes')
      .pipe(
        //catchError(this.handleError('getFlujos', []))
      );
  }
  getMedios(): Observable<Medio[]> {
    return this.http.get<Medio[]>(this.apiUrlMedio)
      .pipe(
        //catchError(this.handleError('getFlujos', []))
      );
  }
  getVias(): Observable<Via[]> {
    return this.http.get<Via[]>(this.apiUrlVia)
      .pipe(
        //catchError(this.handleError('getFlujos', []))
      );
  }
}
