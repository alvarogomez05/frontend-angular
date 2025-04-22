import { Component } from '@angular/core';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.scss']
})
export class NovedadesComponent {

  productos = [1,1,1,1,1,1,1,1,1]



   scrollLeft() {
    // @ts-ignore
     document.querySelector('.slider').scrollBy({
      left: -300, // Ajusta el valor según sea necesario
      behavior: 'smooth'
    });
  }

   scrollRight() {
    // @ts-ignore
     document.querySelector('.slider').scrollBy({
      left: 300, // Ajusta el valor según sea necesario
      behavior: 'smooth'
    });
  }


}
