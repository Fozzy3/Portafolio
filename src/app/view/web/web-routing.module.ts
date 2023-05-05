import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PresentacionComponent } from './pages/presentacion/presentacion.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {path: 'presentacion', component: PresentacionComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: '**', component: PresentacionComponent}
    ]
  }
]
@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ]
})
export class WebRoutingModule { }
