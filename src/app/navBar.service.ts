import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }
   navBarState: Boolean = false;


  flagNavbar(){
    if(this.navBarState == true){
        console.log("Era true y se Volvio False")
        this.navBarState = false;
    }else if(this.navBarState == false){
      console.log("Era False y se Volvio True")
      this.navBarState = true;
    }else{
      console.log("Ninguna")
    }
  }

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
