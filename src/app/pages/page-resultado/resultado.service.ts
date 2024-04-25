import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HandleError } from 'src/app/http-error-handler.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {
  api = `${environment.apiURL}/resultado`;

  private handleError: HandleError;

  constructor(private http: HttpClient) { }

  getResultado(data:any): Observable<any[]> {
    return this.http.post<any[]>(this.api,data)
      .pipe(
        //catchError(this.handleError('getFlujos', []))
      );
  }
}
