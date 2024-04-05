import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ConsultService } from '../page-consult/consult.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-consult-step2',
  standalone: true,
  imports: [CardModule],
  templateUrl: './page-consult-step2.component.html',
  styleUrl: './page-consult-step2.component.scss'
})
export class PageConsultStep2Component {

  constructor(public ticketService: ConsultService, private router: Router) {}

  classes: any[];

  vagons: any[];

  seats: any[];

  seatInformation: any;

  ngOnInit() {
      this.seatInformation = this.ticketService.ticketInformation.seatInformation;

      this.classes = [
          { name: 'First Class', code: 'A', factor: 1 },
          { name: 'Second Class', code: 'B', factor: 2 },
          { name: 'Third Class', code: 'C', factor: 3 }
      ];
  }

  setVagons(event) {
      if (this.seatInformation.class && event.value) {
          this.vagons = [];
          this.seats = [];
          for (let i = 1; i < 3 * event.value.factor; i++) {
              this.vagons.push({ wagon: i + event.value.code, type: event.value.name, factor: event.value.factor });
          }
      }
  }

  setSeats(event) {
      if (this.seatInformation.wagon && event.value) {
          this.seats = [];
          for (let i = 1; i < 10 * event.value.factor; i++) {
              this.seats.push({ seat: i, type: event.value.type });
          }
      }
  }

  nextPage() {
      this.ticketService.ticketInformation.seatInformation = this.seatInformation;
      this.router.navigate(['steps/payment']);
  }

  prevPage() {
      this.router.navigate(['steps/personal']);
  }

}
