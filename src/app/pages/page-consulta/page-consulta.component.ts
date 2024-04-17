import { Component } from '@angular/core';
import { MenuItem,MessageService } from 'primeng/api';
import { StepsModule } from 'primeng/steps';
import { Subscription } from 'rxjs';
import { InformacionService } from './informacion.service';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-page-consulta',
  standalone: true,
  imports: [MessageModule,MessagesModule,StepsModule],
  templateUrl: './page-consulta.component.html',
  styleUrl: './page-consulta.component.scss',
  providers: [MessageService,InformacionService]
})
export class PageConsultaComponent {
  items: MenuItem[];

  subscription: Subscription;

  constructor(public messageService: MessageService, public ticketService: InformacionService) {}

  ngOnInit() {
      this.items = [
          {
              label: 'Paso 1',
              routerLink: ['/consult/data/paso1']
          },
          {
              label: 'Paso 2',
              routerLink: ['/consult/data/paso2']
          },
          {
              label: 'Paso 3',
              routerLink: ['/consult/data/paso3']
          },
      ];

      this.subscription = this.ticketService.informacionComplete$.subscribe((paso1Informacion) => {
        this.messageService.add({ severity: 'success', summary: 'Order submitted', detail: 'Dear, ' + paso1Informacion.selectedFlujo.des + ' your order completed.' });
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
        this.subscription.unsubscribe();
    } 
  }

}
