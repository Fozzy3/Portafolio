import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamingRoutingModule } from './gaming-routing.module';
import { GamePresentationComponent } from './pages/gamePresentation/gamePresentation.component';
import { GameServicesComponent } from './pages/gameServices/gameservices.component';


@NgModule({
  declarations: [
    GamePresentationComponent,
    GameServicesComponent
  ],
  imports: [
    CommonModule,
    GamingRoutingModule
  ]
})
export class GamingModule { }
