import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router';
import { ConsultaPaso2Service } from './consulta-paso2.service';
import { Continente, CualitativasSub, Departamento, Medio, Pais, Via } from './consulta-paso2';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-page-consulta-paso2',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,CommonModule,CardModule,ButtonModule,DropdownModule,RadioButtonModule,CheckboxModule,MultiSelectModule,DialogModule,TableModule,InputTextModule],
  templateUrl: './page-consulta-paso2.component.html',
  styleUrl: './page-consulta-paso2.component.scss'
})
export class PageConsultaPaso2Component {

  selectedCualitativas: any[] = [];
  selectedSubCualitativas: any[] = [];
  cualitativas: any[] = [];

  departamentos: Departamento[] = [];
  selectedDepartamentos:Departamento[] = [];

  paises: Pais[] = [];
  selectedPaises:Pais[] = [];

  continentes: Continente[] = [];
  selectedContinentes:Continente[] = [];

  medios: Medio[] = [];
  selectedMedios:Medio[] = [];

  vias: Via[] = [];
  selectedVias:Via[] = [];

  cualitativasSub: CualitativasSub;
  selectedcualitativasSub:CualitativasSub[] = [];
  tipoRes:string;

  displayModal = false;

  

  constructor(private router: Router, private consultaPaso2Service:ConsultaPaso2Service) {}

  ngOnInit() {
    this.getCualitativas();
    this.getDepartamentos();
    this.getContinentes();
    this.getPaises();
    this.getMedios();
    this.getVias();
}

  getCualitativas(): void {
    this.consultaPaso2Service.getCualitativas().subscribe(
      (cualitativas) => {
        this.cualitativas = cualitativas;
        console.log('cualitativas',cualitativas)
      },
      (error) => {
        console.error('Error al obtener los cualitativas:', error);
      }
    );
  }

  getDepartamentos(): void {
    this.consultaPaso2Service.getDepartamentos().subscribe(
      (departamentos) => {
        this.departamentos = departamentos;
        console.log('departamentos',departamentos)
      },
      (error) => {
        console.error('Error al obtener los departamentos:', error);
      }
    );
  }

  getPaises(): void {
    this.consultaPaso2Service.getPaises().subscribe(
      (paises) => {
        this.paises = paises;
        console.log('paises',paises)
      },
      (error) => {
        console.error('Error al obtener los paises:', error);
      }
    );
  }

  getContinentes(): void {
    this.consultaPaso2Service.getContinentes().subscribe(
      (continentes) => {
        this.continentes = continentes;
        console.log('continentes',continentes)
      },
      (error) => {
        console.error('Error al obtener los continentes:', error);
      }
    );
  }

  getMedios(): void {
    this.consultaPaso2Service.getMedios().subscribe(
      (medios) => {
        this.medios = medios;
        console.log('medios',medios)
      },
      (error) => {
        console.error('Error al obtener los medios:', error);
      }
    );
  }

  getVias(): void {
    this.consultaPaso2Service.getVias().subscribe(
      (vias) => {
        this.vias = vias;
        console.log('vias',vias)
      },
      (error) => {
        console.error('Error al obtener los vias:', error);
      }
    );
  }

  getCualitativasSub(codSub:number): void {
    this.consultaPaso2Service.getCualitativasSub(codSub).subscribe(
      (cualitativasSub) => {
        this.cualitativasSub = cualitativasSub.data;
        this.tipoRes = cualitativasSub.tipoRes;
        console.log('tipoRes',this.tipoRes)
      },
      (error) => {
        console.error('Error al obtener los vias:', error);
      }
    );
  }


  nextPage(): void {
    // Verifica si todos los campos requeridos están llenos
      this.router.navigate(['/consult/data/paso3']);
   
  }

  prevPage(): void {
    // Verifica si todos los campos requeridos están llenos
    if (true) {

      console.log('Todos los campos están llenos. Pasando a la siguiente página...');
      this.router.navigate(['/consult/data/paso1']);
    } else {

      console.error('No todos los campos están llenos. Por favor, complete todos los campos requeridos.');

    }
  }

  calculateCustomerTotal(name: string) {
    let total = 0;

    if (this.cualitativasSub) {
        for (let customer of this.cualitativasSub.data) {
            if (customer.cod_niv2 === name) {
                total++;
            }
        }
    }

    return total;
}
  showModal(subCualitativa:any): void {
    console.log("subCualitativa",subCualitativa)
   
    this.displayModal = true;
    this.getCualitativasSub(subCualitativa.cod_sub)
  }

  onDialogHide(): void {
    // Lógica cuando el modal se cierra
  }



}
