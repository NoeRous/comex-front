import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ConsultService } from '../page-consult/consult.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-consult-step3',
  standalone: true,
  imports: [CardModule],
  templateUrl: './page-consult-step3.component.html',
  styleUrl: './page-consult-step3.component.scss'
})
export class PageConsultStep3Component {

  ticketInformation: any;

  constructor(public ticketService: ConsultService, private router: Router) {}

  ngOnInit() {
      this.ticketInformation = this.ticketService.ticketInformation;
  }

  complete() {
      this.ticketService.complete();
  }

  prevPage() {
      this.router.navigate(['steps/payment']);
  }

}
