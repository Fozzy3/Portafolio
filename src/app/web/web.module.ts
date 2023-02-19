import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';

import { PresentacionComponent } from './pages/presentacion/presentacion.component';
import { ProjectsComponent } from './pages/projects/projects.component';



@NgModule({
  declarations: [
    PresentacionComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule
  ]
})
export class WebModule { }
