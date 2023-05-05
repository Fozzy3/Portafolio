import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(){}

  navbar = [
    {
      "icon": "bx bx-bar-chart-square",
      "name": "Presentacion",
      "routerLink": "/web/presentacion"
    },
    {
      "icon": "bx bx-line-chart",
      "name": "Workout Statistic",
      "routerLink": "/web/projects"
    },
    {
      "icon": "bx bx-calendar-event",
      "name": "Workout Plan",
      "routerLink":"/gaming/presentation"
    },
    {
      "icon": "bx bxs-bolt",
      "name": "Distance Map",
      "routerLink":"/gaming/services"
    },
    {
      "icon": "bx bxs-heart-circle",
      "name": "Diet Food Menu",
      "routerLink":"/applications/presentation"
    },
    {
      "icon": "bx bxs-pie-chart-alt",
      "name": "Personal Record",
      "routerLink":"/applications/services"
    }
  ]

  active:Boolean = false;

}
