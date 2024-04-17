import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common'
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ConsultaPaso2Service } from './consulta-paso2.service';
import { Aduana, Continente, CualitativasSub, Departamento, Medio, Pais, Via } from './consulta-paso2';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { Message } from 'primeng/api';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-page-consulta-paso2',
  standalone: true,
  imports: [MessageModule,MessagesModule,ReactiveFormsModule,FormsModule,CommonModule,CardModule,ButtonModule,DropdownModule,RadioButtonModule,CheckboxModule,MultiSelectModule,DialogModule,TableModule,InputTextModule],
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
  aduanas: Aduana[] = [];
  selectedAduanas:Aduana[] = [];
  cualitativasSub: CualitativasSub;
  selectedcualitativasSub:CualitativasSub[] = [];
  tipoRes:string;
  displayModal = false;
  codFlujo:string;
  messages: Message[] | undefined;
  detailMesage1 = 'En el caso de Exportaciones, la información hasta el año 1999 corresponde al Departamento de Residencia del Exportador, consignado en la Declaración Unidad de Exportación (DUE). A partir del año 2000 los datos corresponden al Departamento de Origen del Producto exportado. En el caso de Importaciones, la información corresponde al Departamento según la aduana donde se realizó el trámite de nacionalización del producto importado.';
  detailMesage2 = 'Debido a que cada una de las clasificaciones estadísticas responde a diferentes criterios de clasificación y agregación, no puede realizar el cruce simultáneo entre dos o más de estos clasificadores:   - Clasificador Uniforme del Comercio Internacional (CUCI Rev.3)  - Clasificador Internacional Industrial Uniforme (CIIU Rev.3)   - Clasificador de Grandes Categorías Económicas (GCE Rev.3)   - Clasificador por Actividad Económica y Principales Productos (Disponible solo para Exportaciones)  - Clasificador por Productos Tradicionales y No Tradicionales (Disponible solo para Exportaciones)   - Clasificador por Uso o Destino Económico (CUODE) (Disponible solo para Importaciones)';
  
  constructor(private route: ActivatedRoute,private router: Router, private consultaPaso2Service:ConsultaPaso2Service) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.codFlujo = params.get('codFlujo');
      this.getServices(parseInt(this.codFlujo));
    });
    this.messages = [{ severity: 'info', summary: 'Departamento: ', detail: this.detailMesage1 },
    { severity: 'info', summary: 'Clasificadores: ', detail: this.detailMesage2 }
    ];
}

  getMenuCualitativas(cod_flujo): void {
    this.consultaPaso2Service.getMenuCualitativas(cod_flujo).subscribe(
      (cualitativas) => {
        this.cualitativas = cualitativas;
      },
      (error) => {
        console.error('Error al obtener los cualitativas:', error);
      }
    );
  }
  getServices(cod_flujo:number): void {
    if(cod_flujo==1){//export
      this.getMenuCualitativas(cod_flujo);
      this.getDepartamentos();
      this.getContinentes();
      this.getPaises();
      this.getMedios();
      this.getVias();
    }else if(cod_flujo==2){//reexport
      this.getMenuCualitativas(cod_flujo);
      this.getDepartamentos();
      this.getContinentes();
      this.getPaises();
      this.getMedios();
      this.getVias();
    }else if(cod_flujo==3){//import
      this.getMenuCualitativas(cod_flujo);
      this.getDepartamentos();
      this.getContinentes();
      this.getPaises();
      this.getMedios();
      this.getVias();
      this.getAduanas();
    }else if(cod_flujo==4){//saldo
      this.getMenuCualitativas(cod_flujo);
      this.getContinentes();
      this.getPaises();
    }else{

    }
  
  }

  getDepartamentos(): void {
    this.consultaPaso2Service.getDepartamentos().subscribe(
      (departamentos) => {
        this.departamentos = departamentos;
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
      },
      (error) => {
        console.error('Error al obtener los vias:', error);
      }
    );
  }

  getAduanas(): void {
    this.consultaPaso2Service.getAduanas().subscribe(
      (aduanas) => {
        this.aduanas = aduanas;
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
      },
      (error) => {
        console.error('Error al obtener los vias:', error);
      }
    );
  }


  nextPage(): void {
      this.router.navigate(['/consult/data/paso3']);
  }

  prevPage(): void {
    if (true) {
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
    //this.cualitativasSub.data;
    this.displayModal = true;
    this.getCualitativasSub(subCualitativa.cod_sub)
  }

  onDialogHide(): void {
    this.displayModal = false;
  }
}
