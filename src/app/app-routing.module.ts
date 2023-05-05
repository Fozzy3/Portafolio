import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'web',
    loadChildren: () => import('./view/web/web.module').then(m => m.WebModule)
  },
  {
    path: 'gaming',
    loadChildren: () => import('./view/gaming/gaming.module').then(m => m.GamingModule)
  },
  {
    path: 'applications',
    loadChildren: () => import('./view/applications/applications.module').then(m => m.ApplicationsModule)
  },
  {
    path: '**',
    redirectTo: 'web'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
