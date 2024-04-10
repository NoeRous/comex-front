import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { LandingComponent } from './pages/landing/landing.component';
import { DashboardComponent } from './demo/components/dashboard/dashboard.component';
import { PageConsultComponent } from './pages/page-consult/page-consult.component';
import { PageConsultStep1Component } from './pages/page-consult-step1/page-consult-step1.component';
import { PageConsultStep2Component } from './pages/page-consult-step2/page-consult-step2.component';
import { PageConsultStep3Component } from './pages/page-consult-step3/page-consult-step3.component';
import { PageConsultaComponent } from './pages/page-consulta/page-consulta.component';
import { PageConsultaPaso1Component } from './pages/page-consulta-paso1/page-consulta-paso1.component';
import { PageConsultaPaso2Component } from './pages/page-consulta-paso2/page-consulta-paso2.component';


@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: LandingComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
                ]
            },

            {
                path: 'consult', component: AppLayoutComponent,
                children: [
                    { path: 'data',component: PageConsultaComponent, children: [
                        { path: 'paso1',component: PageConsultaPaso1Component },
                        { path: 'paso2',component: PageConsultaPaso2Component },
                        { path: 'step3',component: PageConsultStep3Component },
                    ] },
                    { path: 'step1',component: PageConsultStep1Component },
                    { path: 'step2',component: PageConsultStep2Component },
                    { path: 'step3',component: PageConsultStep3Component },
                ]
            },

           /* {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule) },
                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
                ]
            },*/
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
