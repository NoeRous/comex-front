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
import { InformacionService } from '../page-consulta/informacion.service';
import { TooltipModule } from 'primeng/tooltip';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-page-consulta-paso2',
  standalone: true,
  imports: [TooltipModule,MessageModule,MessagesModule,ReactiveFormsModule,FormsModule,CommonModule,CardModule,ButtonModule,DropdownModule,RadioButtonModule,CheckboxModule,MultiSelectModule,DialogModule,TableModule,InputTextModule,ToastModule],
  templateUrl: './page-consulta-paso2.component.html',
  styleUrl: './page-consulta-paso2.component.scss',
  providers: [MessageService]
})
export class PageConsultaPaso2Component {
  paso1Informacion: any;
  paso2Informacion: any;
  cualitativas: any[] = [];
  cualitativasNandina: any[] = [];
  departamentos: Departamento[] = [];
  paises: Pais[] = [];
  continentes: Continente[] = [];
  medios: Medio[] = [];
  vias: Via[] = [];
  aduanas: Aduana[] = [];
  cualitativasSub: CualitativasSub;
  tipoRes:string;
  displayModal = false;
  displayModalNandina = false;
  codFlujo:string;
  messages: Message[] | undefined;
  detailMesage1 = 'En el caso de Exportaciones, la información hasta el año 1999 corresponde al Departamento de Residencia del Exportador, consignado en la Declaración Unidad de Exportación (DUE). A partir del año 2000 los datos corresponden al Departamento de Origen del Producto exportado. En el caso de Importaciones, la información corresponde al Departamento según la aduana donde se realizó el trámite de nacionalización del producto importado.';
  detailMesage2 = 'Debido a que cada una de las clasificaciones estadísticas responde a diferentes criterios de clasificación y agregación, no puede realizar el cruce simultáneo entre dos o más de estos clasificadores:   - Clasificador Uniforme del Comercio Internacional (CUCI Rev.3)  - Clasificador Internacional Industrial Uniforme (CIIU Rev.3)   - Clasificador de Grandes Categorías Económicas (GCE Rev.3)   - Clasificador por Actividad Económica y Principales Productos (Disponible solo para Exportaciones)  - Clasificador por Productos Tradicionales y No Tradicionales (Disponible solo para Exportaciones)   - Clasificador por Uso o Destino Económico (CUODE) (Disponible solo para Importaciones)';
  
  constructor(public informacionService: InformacionService,private route: ActivatedRoute,private router: Router, private consultaPaso2Service:ConsultaPaso2Service,private messageService: MessageService) {}

  ngOnInit() {
    this.paso1Informacion = this.informacionService.informacion.paso1Informacion;
    this.paso2Informacion = this.informacionService.informacion.paso2Informacion;
    console.log('this.paso2Informacion',this.paso2Informacion);
    if(this.paso1Informacion.selectedFlujo){
      if(this.paso1Informacion.selectedFlujo){
        this.codFlujo = this.paso1Informacion.selectedFlujo.cod_flujo;
        this.getServices(parseInt(this.codFlujo));
      }
    }else{
      this.prevPage();
    }

    this.messages = [{ severity: 'info', summary: 'Dep: ', detail: this.detailMesage1 },
    { severity: 'info', summary: 'Clas: ', detail: this.detailMesage2 }
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

  getMenuCualitativasNandina(cod_flujo): void {
    this.consultaPaso2Service.getMenuCualitativasNandina(cod_flujo).subscribe(
      (cualitativasNandina) => {
        this.cualitativasNandina = cualitativasNandina;
      },
      (error) => {
        console.error('Error al obtener los cualitativas:', error);
      }
    );
  }

  getServices(cod_flujo:number): void {
    if(cod_flujo==1){//export
      this.getMenuCualitativasNandina(cod_flujo);
      this.getMenuCualitativas(cod_flujo);
      this.getDepartamentos();
      this.getContinentes();
      this.getPaises();
      this.getMedios();
      this.getVias();
    }else if(cod_flujo==2){//reexport
      this.getMenuCualitativasNandina(cod_flujo);
      this.getMenuCualitativas(cod_flujo);
      this.getDepartamentos();
      this.getContinentes();
      this.getPaises();
      this.getMedios();
      this.getVias();
    }else if(cod_flujo==3){//import
      this.getMenuCualitativasNandina(cod_flujo);
      this.getMenuCualitativas(cod_flujo);
      this.getDepartamentos();
      this.getContinentes();
      this.getPaises();
      this.getMedios();
      this.getVias();
      this.getAduanas();
    }else if(cod_flujo==4){//saldo
      this.getMenuCualitativasNandina(cod_flujo);
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
    this.informacionService.informacion.paso2Informacion = this.paso2Informacion;
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
    this.cualitativasSub = null;
    this.displayModal = true;
    this.getCualitativasSub(subCualitativa.cod_sub)
  }
  onDialogHide(): void {
    this.displayModal = false;
    this.cualitativasSub = null;
   // this.limpiarVariables('clasificaciones');
  }
  saveDatosClasificaciones(): void {
    this.displayModal = false;
  }
  showModalNandina(subCualitativa:any): void {
    this.displayModalNandina = true;
    this.getCualitativasSub(subCualitativa.cod_sub)
  }
  onDialogHideNandina(): void {
    this.displayModalNandina = false;
    this.cualitativasSub = null;
    //this.limpiarVariables('clasificacionNandina');
  }
  saveDatosClasificacionesNandina(): void {
    this.displayModalNandina = false;
  }
  onChangeFlujoNandina(cualitativa: any) {
  }


  
  onChangeFlujo(cualitativa: any) {
  }
  limpiarVariables(item:string) {
    if(item == 'clasificaciones'){
      this.paso2Informacion.selectedClasificacion = [];
      this.paso2Informacion.selectedSubCualitativas = {};
      this.paso2Informacion.selectedSubNandinaDatos = [];
      this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Seccion Limpiada con éxito.' });
    }else if(item =='clasificacionNandina'){
      this.paso2Informacion.selectedNandina = [];
      this.paso2Informacion.selectedSubNandina = {};
      this.paso2Informacion.selectedSubCualitativasDatos = [];
      this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Seccion Limpiada con éxito.' });
    }else if(item == 'otros'){
      this.paso2Informacion.selectedDepartamentos = [];
      this.paso2Informacion.selectedContinentes = [];
      this.paso2Informacion.selectedPaises = [];
      this.paso2Informacion.selectedMedios = [];
      this.paso2Informacion.selectedVias = [];
      this.paso2Informacion.selectedAduanas = [];
      this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Seccion Limpiada con éxito.' });
    }else{
      console.log('ok')
    }
  }
}