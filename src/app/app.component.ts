import { Component } from '@angular/core';
import {ClientesService } from './navBar.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public serviceNavBar : ClientesService){}

  title = 'Portafolio';
  navbarFlag = false;
}

