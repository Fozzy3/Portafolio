import { Component } from '@angular/core';
import {ClientesService } from '../../../navBar.service'

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.scss']
})
export class PresentacionComponent {
  constructor(public serviceNavBar : ClientesService){}


}
