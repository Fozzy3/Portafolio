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


   /* let nav = $('nav')
    let  menu = $('nav h1'),
      main = $('main'),

    menu.on('click', function() {
      open = !open ? true : false;
      nav.toggleClass('menu-active');
      main.toggleClass('menu-active');
      nav.removeClass('menu-hover');
      main.removeClass('menu-hover');
      console.log(open);
    });
    menu.hover(
      function() {
        if (!open) {
          nav.addClass('menu-hover');
          main.addClass('menu-hover');
        }
      }, function() {
        nav.removeClass('menu-hover');
        main.removeClass('menu-hover');
      }
    );*/
}

