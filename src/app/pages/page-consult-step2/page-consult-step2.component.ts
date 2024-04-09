import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ConsultService } from '../page-consult/consult.service';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { Book } from '../page-consult-step1/prueba';

@Component({
  selector: 'app-page-consult-step2',
  standalone: true,
  imports: [CardModule,ButtonModule,DropdownModule,RadioButtonModule],
  templateUrl: './page-consult-step2.component.html',
  styleUrl: './page-consult-step2.component.scss'
})
export class PageConsultStep2Component {

  constructor(public ticketService: ConsultService, private router: Router) {}

  classes: any[];

  vagons: any[];

  seats: any[];

  seatInformation: any;

  selectedCategory: any = null;

  books: Book[] = [];

  categories: any[] = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' }
];

  ngOnInit() {

    this.selectedCategory = this.categories[1];
      this.seatInformation = this.ticketService.ticketInformation.seatInformation;
      this.classes = [
          { name: 'First Class', code: 'A', factor: 1 },
          { name: 'Second Class', code: 'B', factor: 2 },
          { name: 'Third Class', code: 'C', factor: 3 }
      ];
  }



  nextPage() {
      this.ticketService.ticketInformation.seatInformation = this.seatInformation;
      this.router.navigate(['steps/payment']);
  }

  prevPage() {
      this.router.navigate(['steps/personal']);
  }

}
