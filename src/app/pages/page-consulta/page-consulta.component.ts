import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { StepsModule } from 'primeng/steps';

@Component({
  selector: 'app-page-consulta',
  standalone: true,
  imports: [StepsModule],
  templateUrl: './page-consulta.component.html',
  styleUrl: './page-consulta.component.scss'
})
export class PageConsultaComponent {
  items: MenuItem[];

  constructor() {}

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
  }

  ngOnDestroy() {
      
  }

}
