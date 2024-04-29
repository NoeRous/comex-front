import { Component } from '@angular/core';
import { MenuItem,MessageService } from 'primeng/api';
import { StepsModule } from 'primeng/steps';
import { Subscription } from 'rxjs';
import { InformacionService } from './informacion.service';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-page-consulta',
  standalone: true,
  imports: [MessageModule,MessagesModule,StepsModule,OverlayPanelModule,ButtonModule,DialogModule],
  templateUrl: './page-consulta.component.html',
  styleUrl: './page-consulta.component.scss',
  providers: [MessageService,InformacionService]
})
export class PageConsultaComponent {
  items: MenuItem[];

  subscription: Subscription;

  visible: boolean = false;

  constructor(public messageService: MessageService, public informacionService: InformacionService) {}

  ngOnInit() {
      this.items = [
          {
              label: 'Cuantitativas',
              routerLink: ['/consult/data/paso1']
          },
          {
              label: 'Cualitativas',
              routerLink: ['/consult/data/paso2']
          },
          {
              label: 'Resumen',
              routerLink: ['/consult/data/paso3']
          },
          {
            label: 'Resultado',
            routerLink: ['/consult/data/resultado']
          },
      ];

      this.subscription = this.informacionService.informacionComplete$.subscribe((paso1Informacion) => {
        this.messageService.add({ severity: 'success', summary: 'Order submitted', detail: 'Dear, ' + paso1Informacion.selectedFlujo.des + ' your order completed.' });
    });
  }
   
  showDialog() {
    this.visible = true;
  }

  ngOnDestroy() {
    if (this.subscription) {
        this.subscription.unsubscribe();
    } 
  }

}
