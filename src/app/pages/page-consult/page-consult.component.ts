import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StepsModule } from 'primeng/steps';
import { ConsultService } from './consult.service';


@Component({
  selector: 'app-page-consult',
  templateUrl: './page-consult.component.html',
  standalone: true,
  imports: [StepsModule],
  styleUrls: ['./page-consult.component.scss'],
  providers: [MessageService,ConsultService]
})
export class PageConsultComponent implements OnInit, OnDestroy {
    items: MenuItem[];

    constructor() {}

    ngOnInit() {
        this.items = [
            {
                label: 'Paso 1',
                routerLink: ['/consult/step1']
            },
            {
                label: 'Paso 2',
                routerLink: ['/consult/step2']
            },
            {
                label: 'Paso 3',
                routerLink: ['/consult/step3']
            },
        ];
    }

    ngOnDestroy() {
        
    }
}