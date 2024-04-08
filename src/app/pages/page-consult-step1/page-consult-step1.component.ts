import { Component } from '@angular/core';
import { ConsultService } from '../page-consult/consult.service';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { PruebaService } from './prueba.service';
import { Book } from './prueba';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-page-consult-step1',
  standalone: true,
  imports: [CardModule,DropdownModule],
  templateUrl: './page-consult-step1.component.html',
  styleUrl: './page-consult-step1.component.scss'
})
export class PageConsultStep1Component {

  personalInformation: any;

  submitted: boolean = false;

  books: Book[] = [];

  constructor(public ticketService: ConsultService, private router: Router, private pruebaService:PruebaService) {}

  ngOnInit() {
      this.personalInformation = this.ticketService.getTicketInformation().personalInformation;
      this.getBooks();
  }

  nextPage() {
      if (this.personalInformation.firstname && this.personalInformation.lastname && this.personalInformation.age) {
          this.ticketService.ticketInformation.personalInformation = this.personalInformation;
          this.router.navigate(['steps/seat']);

          return;
      }

      this.submitted = true;
  }

  getBooks(): void {
    this.pruebaService.getBooks().subscribe(
      (books) => {
        this.books = books;
        console.log('books',books)
      },
      (error) => {
        console.error('Error al obtener los empleados:', error);
      }
    );
  }

}
