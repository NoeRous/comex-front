import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ConsultaPaso3Service } from './consulta-paso3.service';
import { ButtonModule } from 'primeng/button';
import { InformacionService } from '../page-consulta/informacion.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-consulta-paso3',
  standalone: true,
  imports: [CardModule,ReactiveFormsModule,FormsModule,ButtonModule,CommonModule],
  templateUrl: './page-consulta-paso3.component.html',
  styleUrl: './page-consulta-paso3.component.scss'
})
export class PageConsultaPaso3Component {
  informacion: any;

  flujo:string;
  varCuantitativas:string;

  constructor(private router: Router, private consultaPaso3Service:ConsultaPaso3Service,public informacionService: InformacionService) {}

  ngOnInit() {
    this.informacion = this.informacionService.informacion;
    if(this.informacion.paso1Informacion.selectedFlujo && this.informacion.paso2Informacion ){
      console.log('informacion',this.informacion)
      this.flujo = this.informacion.paso1Informacion.selectedFlujo;
      this.varCuantitativas = this.informacion.paso1Informacion.selectedCuantitativas;
     
    }else{
      this.prevPage();
    }
}


  prevPage(): void {
      console.log('Todos los campos están llenos. Pasando a la siguiente página...');
      this.router.navigate(['/consult/data/paso2']);
  }
  confirmationPage(): void {
    console.log('Aqui genera.........');
    this.informacionService.complete();
    this.router.navigate(['/consult/resultado']);
  }

  complete() {
    this.informacionService.complete();
    
  }

}
