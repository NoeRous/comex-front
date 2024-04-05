import { Component } from '@angular/core';
import { ConsultService } from '../page-consult/consult.service';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-page-consult-step1',
  standalone: true,
  imports: [CardModule],
  templateUrl: './page-consult-step1.component.html',
  styleUrl: './page-consult-step1.component.scss'
})
export class PageConsultStep1Component {

  personalInformation: any;

  submitted: boolean = false;

  constructor(public ticketService: ConsultService, private router: Router) {}

  ngOnInit() {
      this.personalInformation = this.ticketService.getTicketInformation().personalInformation;
  }

  nextPage() {
      if (this.personalInformation.firstname && this.personalInformation.lastname && this.personalInformation.age) {
          this.ticketService.ticketInformation.personalInformation = this.personalInformation;
          this.router.navigate(['steps/seat']);

          return;
      }

      this.submitted = true;
  }

}
