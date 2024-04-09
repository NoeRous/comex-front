import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultStep1Service {

  constructor(private http: HttpClient) { }

    getFlows() {
        return this.http.get<any>('assets/comex/data/flow.json')
            .toPromise()
            .then(res => res.data as any[])
            .then(data => data);
    }

    getQuantitatives() {
      return this.http.get<any>('assets/comex/data/quantitative.json')
          .toPromise()
          .then(res => res.data as any[])
          .then(data => data);
  }
}
