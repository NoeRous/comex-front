import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HandleError } from 'src/app/http-error-handler.service';
import { environment } from 'src/environments/environment';
import { Cuantitativa, Flujo, Gestion, Periodicidad } from './consulta-paso1';

@Injectable({
  providedIn: 'root'
})
export class ConsultaPaso1Service {
  apiUrlFlujo = `${environment.apiURL}/flujos`;
  apiUrlCuantitativa = `${environment.apiURL}/cuantitativas`;
  apiUrltiempo = `${environment.apiURL}/tiempo`;

  private handleError: HandleError;

  constructor(private http: HttpClient) { }

  getFlujos(): Observable<Flujo[]> {
    return this.http.get<Flujo[]>(this.apiUrlFlujo)
      .pipe(
        //catchError(this.handleError('getFlujos', []))
      );
  }

  getVarCuantitativas(): Observable<Cuantitativa[]> {
    return this.http.get<Cuantitativa[]>(this.apiUrlCuantitativa)
      .pipe(
        //catchError(this.handleError('getFlujos', []))
      );
  }

  getPeriodicidad(): Observable<Periodicidad[]> {
    return this.http.get<Periodicidad[]>(this.apiUrltiempo+'/periodicidad')
      .pipe(
        //catchError(this.handleError('getFlujos', []))
      );
  }

  getGestiones(): Observable<Gestion[]> {
    return this.http.get<Gestion[]>(this.apiUrltiempo+'/gestiones')
      .pipe(
        //catchError(this.handleError('getFlujos', []))
      );
  }

}
