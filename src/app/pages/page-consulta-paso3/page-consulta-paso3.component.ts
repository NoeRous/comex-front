import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ConsultaPaso3Service } from './consulta-paso3.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-page-consulta-paso3',
  standalone: true,
  imports: [CardModule,ReactiveFormsModule,FormsModule,ButtonModule],
  templateUrl: './page-consulta-paso3.component.html',
  styleUrl: './page-consulta-paso3.component.scss'
})
export class PageConsultaPaso3Component {


  constructor(private router: Router, private consultaPaso3Service:ConsultaPaso3Service) {}

  prevPage(): void {
      console.log('Todos los campos están llenos. Pasando a la siguiente página...');
      this.router.navigate(['/consult/data/paso2']);
  }
  confirmationPage(): void {
    console.log('Aqui genera.........');
}

}
