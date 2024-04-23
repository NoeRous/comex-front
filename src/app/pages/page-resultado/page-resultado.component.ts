import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InformacionService } from '../page-consulta/informacion.service';

@Component({
  selector: 'app-page-resultado',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './page-resultado.component.html',
  styleUrl: './page-resultado.component.scss'
})
export class PageResultadoComponent {
  private chart: am4charts.XYChart;
  informacion: any;

  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone,private router: Router, private informacionService:InformacionService) {}

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
    if(this.informacion.paso1Informacion.selectedFlujo && this.informacion.paso2Informacion ){
     /* console.log('informacion',this.informacion)
      this.flujo = this.informacion.paso1Informacion.selectedFlujo;
      this.varCuantitativas = this.informacion.paso1Informacion.selectedCuantitativas;
      this.selectedPeriocidad =  this.informacion.paso1Informacion.selectedPeriocidad;
      this.selectedGestiones =  this.informacion.paso1Informacion.selectedGestiones;
      this.selectedNandina = this.informacion.paso2Informacion.selectedNandina;
      this.selectedClasificacion = this.informacion.paso2Informacion.selectedClasificacion;

      this.selectedDepartamentos = this.informacion.paso2Informacion.selectedDepartamentos;
      this.selectedContinentes = this.informacion.paso2Informacion.selectedContinentes;
      this.selectedPaises = this.informacion.paso2Informacion.selectedPaises;
      this.selectedMedios = this.informacion.paso2Informacion.selectedMedios;
      this.selectedVias = this.informacion.paso2Informacion.selectedVias;
      this.selectedAduanas = this.informacion.paso2Informacion.selectedAduanas;*/
     
    }else{
      this.prevPage();
    }
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("chartdiv", am4charts.XYChart);

      chart.paddingRight = 20;

      let data = [];
      let visits = 10;
      for (let i = 1; i < 366; i++) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
      }

      chart.data = data;

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.minWidth = 35;

      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "value";
      series.tooltipText = "{valueY.value}";

      chart.cursor = new am4charts.XYCursor();

      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
      chart.scrollbarX = scrollbarX;

      this.chart = chart;
    });
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

}
