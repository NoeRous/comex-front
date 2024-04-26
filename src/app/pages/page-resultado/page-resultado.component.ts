import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InformacionService } from '../page-consulta/informacion.service';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { CommonModule } from '@angular/common';

import { AgGridAngular } from 'ag-grid-angular'; // AG Grid Component
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { ResultadoService } from './resultado.service';


@Component({
  selector: 'app-page-resultado',
  standalone: true,
  imports: [CommonModule, ButtonModule, TabMenuModule, AgGridAngular],
  templateUrl: './page-resultado.component.html',
  styleUrl: './page-resultado.component.scss'
})
export class PageResultadoComponent {
  private chart: am4charts.XYChart;
  informacion: any;
  data: any;

  items: MenuItem[] | undefined;

  rowData = [];
  rowDataTotal = [];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [];
  selectedTab: string = 'Tabla'; // Inicialmente mostrando el gráfico
  activeItem: MenuItem | undefined;



  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone, private router: Router, private informacionService: InformacionService, private resultadoService: ResultadoService) { }

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngOnInit() {
    this.informacion = this.informacionService.informacion;
    console.log(' this.informacion', this.informacion)
    this.grafico(this.informacion);
    if (this.informacion.paso1Informacion.selectedFlujo && this.informacion.paso2Informacion) {
      this.getResultado(this.informacion);
      this.grafico(this.informacion);

    } else {
      this.prevPage();
    }

    this.items = [
      { label: 'Tabla', icon: 'pi pi-fw pi-table' },
      { label: 'Gráfico', icon: 'pi pi-fw pi-chart-bar' },
    ];
  }



  prevPage(): void {
    console.log('Todos los campos están llenos. Pasando a la siguiente página...');
    this.router.navigate(['/consult/data/paso3']);
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
    if (this.activeItem.label === 'Gráfico'){
      this.selectedTab = 'Gráfico';
      this.grafico( this.rowData);
    }
     
    if (this.activeItem.label === 'Tabla')
      this.selectedTab = 'Tabla';
  }
  /***metodo para enviar datos***/

  getResultado(resultado: any): void {
    this.resultadoService.getResultado(resultado).subscribe(
      (resultado) => {
        this.data = resultado;
        this.colDefs = this.data.colDefs;
        this.rowData = this.data.result;
        this.rowDataTotal = this.data.resultTotales;
        this.grafico( this.rowData);

      },
      (error) => {
        console.error('Error al obtener los cualitativas:', error);
      }
    );
  }

  grafico(data:any):void {

    console.log('llamando a la fncion grafico-------------')

      // Chart code goes in here
      this.browserOnly(() => {
        am4core.useTheme(am4themes_animated);
        //am4core.useTheme(am4themes_kelly);
  
        // Create chart instance
        var chart = am4core.create("chartdiv", am4charts.XYChart);
  
        chart.marginRight = 400;
  
        // Add data
        chart.data = data;
        // Create axes
        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "gestion";
        categoryAxis.title.text = "Local gestion offices";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 20;
  
        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.title.text = "Expenditure (M)";
  
        // Create series
        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "sum_e_kilbru";
        series.dataFields.categoryX = "gestion";
        series.name = "sum_e_kilbru";
        series.tooltipText = "{name}: [bold]{valueY}[/]";
        // This has no effect
        // series.stacked = true;
  
        var series2 = chart.series.push(new am4charts.ColumnSeries());
        series2.dataFields.valueY = "sum_e_kilnet";
        series2.dataFields.categoryX = "gestion";
        series2.name = "sum_e_kilnet";
        series2.tooltipText = "{name}: [bold]{valueY}[/]";
        // Do not try to stack on top of previous series
        // series2.stacked = true;
  
        var series3 = chart.series.push(new am4charts.ColumnSeries());
        series3.dataFields.valueY = "sum_e_valor";
        series3.dataFields.categoryX = "gestion";
        series3.name = "sum_e_valor";
        series3.tooltipText = "{name}: [bold]{valueY}[/]";
        series3.stacked = true;
  
        // Add cursor
        chart.cursor = new am4charts.XYCursor();
  
        // Add legend
        chart.legend = new am4charts.Legend();
      });

  }
   
}
