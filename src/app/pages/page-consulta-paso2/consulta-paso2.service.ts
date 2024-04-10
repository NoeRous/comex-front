import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HandleError } from 'src/app/http-error-handler.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultaPaso2Service {
  apiUrlCualitativas = `${environment.apiURL}/cualitativas`;

  private handleError: HandleError;

  constructor(private http: HttpClient) { }

  getCualitativas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrlCualitativas)
      .pipe(
        //catchError(this.handleError('getFlujos', []))
      );
  }
}
