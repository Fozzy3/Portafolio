import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  flagNavbar(message : String){
    alert(message);
  }

}
