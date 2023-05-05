import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePresentationComponent } from './pages/gamePresentation/gamePresentation.component';
import { GameServicesComponent } from './pages/gameServices/gameservices.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'presentation', component: GamePresentationComponent},
      {path: 'services', component: GameServicesComponent},
      {path: '**', redirectTo: 'presentation'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamingRoutingModule { }
