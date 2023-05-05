import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppPresentationComponent } from './pages/app-presentation/app-presentation.component';
import { AppServicesComponent } from './pages/app-services/app-services.component';

const routes: Routes = [

 {
  path: '',
  children: [
    {path: 'presentation', component: AppPresentationComponent},
    {path: 'services', component: AppServicesComponent},
    {path: '**', redirectTo:'presetation'}
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
