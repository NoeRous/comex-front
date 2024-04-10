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

@Component({
  selector: 'app-page-consulta-paso2',
  standalone: true,
  imports: [CommonModule,CardModule,ButtonModule,DropdownModule,RadioButtonModule,CheckboxModule],
  templateUrl: './page-consulta-paso2.component.html',
  styleUrl: './page-consulta-paso2.component.scss'
})
export class PageConsultaPaso2Component {

  selectedCualitativas: any[] = [];
  cualitativas: any[] = [];

  constructor(private router: Router, private consultaPaso2Service:ConsultaPaso2Service) {}

  ngOnInit() {
    this.getCualitativas();
}

  getCualitativas(): void {
    this.consultaPaso2Service.getCualitativas().subscribe(
      (cualitativas) => {
        this.cualitativas = cualitativas;
        console.log('cualitativas',cualitativas)
      },
      (error) => {
        console.error('Error al obtener los flujos:', error);
      }
    );
  }




}
