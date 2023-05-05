import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { AppPresentationComponent } from './pages/app-presentation/app-presentation.component';
import { AppServicesComponent } from './pages/app-services/app-services.component';


@NgModule({
  declarations: [
    AppPresentationComponent,
    AppServicesComponent
  ],
  imports: [
    CommonModule,
    ApplicationsRoutingModule
  ]
})
export class ApplicationsModule { }
