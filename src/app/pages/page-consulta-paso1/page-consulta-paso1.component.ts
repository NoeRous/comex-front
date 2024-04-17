import { Component,OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { ConsultaPaso1Service } from './consulta-paso1.service';
import { Cuantitativa, Flujo, Gestion, Periodicidad } from './consulta-paso1';
import { MultiSelectModule } from 'primeng/multiselect';
import { map } from 'rxjs';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';


@Component({
  selector: 'app-page-consulta-paso1',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CardModule,DropdownModule,ButtonModule,MultiSelectModule,MessageModule,MessagesModule,ToastModule],
  templateUrl: './page-consulta-paso1.component.html',
  styleUrl: './page-consulta-paso1.component.scss',
  providers: [MessageService]
})
export class PageConsultaPaso1Component {

  flujos: Flujo[] = [];
  selectedFlujo: Flujo;
  cuantitativas: Cuantitativa[] = [];
  selectedCuantitativas: Cuantitativa[] = [];
  periodicidad: Periodicidad[] = [];
  selectedPeriocidad: Periodicidad;
  gestiones: Gestion[] = [];
  selectedGestiones: Gestion[] = [];


  constructor(private router: Router,private fb: FormBuilder, private consultaPaso1Service:ConsultaPaso1Service,private messageService: MessageService) {}

  ngOnInit() {
    this.getFlujos();
    //this.getVarCuantitativas();
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

  getVarCuantitativas(cod_flujo: number): void {
    this.consultaPaso1Service.getVarCuantitativas().pipe(
      map((cuantitativas: any) => {
        // Filtrar las cuantitativas basadas en el código de flujo
        return cuantitativas.cuantitativas.filter(item => item.cod_flujo === cod_flujo);
      })
    ).subscribe(
      (cuantitativasFiltradas) => {
        this.cuantitativas = cuantitativasFiltradas;
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
      },
      (error) => {
        console.error('Error al obtener los flujos:', error);
      }
    );
  }

  onChangeFlujo(item: any) {

    if(item.value){
      console.log('item --->', item.value.cod_flujo)
      this.selectedCuantitativas = [];
      this.getVarCuantitativas(item.value.cod_flujo)
    }
  }

  nextPage(): void {
    if (this.camposLlenos()) {
      this.router.navigate(['/consult/data/paso2/flujo', this.selectedFlujo.cod_flujo]);
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No todos los campos están llenos. Por favor, complete todos los campos requeridos.' });
    }
  }
  
  private camposLlenos(): boolean {
    if (this.selectedFlujo && this.selectedCuantitativas.length > 0 && this.selectedPeriocidad && this.selectedGestiones.length > 0 ) {
      return true; // Todos los campos requeridos están llenos
    } else {
      return false; // Al menos uno de los campos requeridos está vacío
    }
  }
}
