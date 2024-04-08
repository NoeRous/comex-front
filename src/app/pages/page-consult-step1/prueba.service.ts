import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
//import { HandleError, HttpErrorHandler } from 'src/app/http-error-handler.service';
import { environment } from 'src/environments/environment';
import { Book } from './prueba';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  apiUrl = `${environment.apiURL}/books`; 
 // private handleError: HandleError;

  constructor(
    private http: HttpClient,
    //httpErrorHandler: HttpErrorHandler
    ) {
   // this.handleError = httpErrorHandler.createHandleError('booksService');
  }

  getBooks(): Observable<Book[]> {
    console.log("ingresa")
    return this.http.get<Book[]>(this.apiUrl)
      .pipe(
       // catchError(this.handleError('books', []))
      );
  }
}
