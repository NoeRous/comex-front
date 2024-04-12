import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Flujo } from './consult-step1';
import { HandleError } from 'src/app/http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class ConsultStep1Service {

  apiUrl = `${environment.apiURL}/flujos`;

  private handleError: HandleError;

  constructor(private http: HttpClient) { }

  getFlujos(): Observable<Flujo[]> {
    return this.http.get<Flujo[]>(this.apiUrl)
      .pipe(
        //catchError(this.handleError('getFlujos', []))
      );
  }
}