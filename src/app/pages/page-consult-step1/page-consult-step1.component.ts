import { Component } from '@angular/core';
import { ConsultService } from '../page-consult/consult.service';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { Book } from './prueba';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ConsultStep1Service } from './consult-step1.service';
import { Cuantitativa, Flujo } from './consult-step1';


@Component({
  selector: 'app-page-consult-step1',
  standalone: true,
  imports: [CardModule,DropdownModule,ButtonModule],
  templateUrl: './page-consult-step1.component.html',
  styleUrl: './page-consult-step1.component.scss'
})
export class PageConsultStep1Component {

  personalInformation: any;

  submitted: boolean = false;

  flujos: Flujo[] = [];

  quantitatives: Cuantitativa[] = [];

  constructor(public ticketService: ConsultService, private router: Router, private consultStep1Service:ConsultStep1Service) {}

  ngOnInit() {
      this.personalInformation = this.ticketService.getTicketInformation().personalInformation;
      //this.getBooks();
      this.getFlujos();
     // this.getQuantitatives()
  }

  nextPage() {
      if (this.personalInformation.firstname && this.personalInformation.lastname && this.personalInformation.age) {
          this.ticketService.ticketInformation.personalInformation = this.personalInformation;
          this.router.navigate(['steps/seat']);

          return;
      }
      this.submitted = true;
  }

  /*getBooks(): void {
    this.pruebaService.getBooks().subscribe(
      (books) => {
        this.books = books;
        console.log('books',books)
      },
      (error) => {
        console.error('Error al obtener los empleados:', error);
      }
    );
  }*/

  getFlujos(): void {
    this.consultStep1Service.getFlujos().subscribe(
      (flujos) => {
        this.flujos = flujos;
        console.log('flujos',flujos)
      },
      (error) => {
        console.error('Error al obtener los flujos:', error);
      }
    );
  }

  /*getQuantitatives(): void {
    this.consultStep1Service.getQuantitatives().then(
      (quantitatives) => {
        this.quantitatives = quantitatives;
        console.log('quantitatives',quantitatives)
      },
      (error) => {
        console.error('Error al obtener los empleados:', error);
      }
    );
  }¨*/

}
