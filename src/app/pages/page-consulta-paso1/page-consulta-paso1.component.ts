import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { ConsultaPaso1Service } from './consulta-paso1.service';
import { Cuantitativa, Flujo, Gestion, Periodicidad } from './consulta-paso1';
import { MultiSelectModule } from 'primeng/multiselect';


@Component({
  selector: 'app-page-consulta-paso1',
  standalone: true,
  imports: [CardModule,DropdownModule,ButtonModule,MultiSelectModule],
  templateUrl: './page-consulta-paso1.component.html',
  styleUrl: './page-consulta-paso1.component.scss'
})
export class PageConsultaPaso1Component {

  flujos: Flujo[] = [];
  cuantitativas: Cuantitativa[] = [];
  periodicidad: Periodicidad[] = [];
  gestiones: Gestion[] = [];

  constructor(private router: Router, private consultaPaso1Service:ConsultaPaso1Service) {}

  ngOnInit() {
    this.getFlujos();
    this.getVarCuantitativas();
    this.getPeriodicidad();
    this.getGestiones();
}

  getFlujos(): void {
    this.consultaPaso1Service.getFlujos().subscribe(
      (flujos) => {
        this.flujos = flujos;
        console.log('flujos',flujos)
      },
      (error) => {
        console.error('Error al obtener los flujos:', error);
      }
    );
  }

  getVarCuantitativas(): void {
    this.consultaPaso1Service.getVarCuantitativas().subscribe(
      (cuantitativas) => {
        this.cuantitativas = cuantitativas;
        console.log('cuantitativas',cuantitativas)
      },
      (error) => {
        console.error('Error al obtener los flujos:', error);
      }
    );
  }

  getPeriodicidad(): void {
    this.consultaPaso1Service.getPeriodicidad().subscribe(
      (periodicidad) => {
        this.periodicidad = periodicidad;
        console.log('periodicidad',periodicidad)
      },
      (error) => {
        console.error('Error al obtener los flujos:', error);
      }
    );
  }

  getGestiones(): void {
    this.consultaPaso1Service.getGestiones().subscribe(
      (gestiones) => {
        this.gestiones = gestiones;
        console.log('gestiones',gestiones)
      },
      (error) => {
        console.error('Error al obtener los flujos:', error);
      }
    );
  }
}
