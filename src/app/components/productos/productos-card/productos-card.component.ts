import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-productos-card',
  templateUrl: './productos-card.component.html',
  styleUrls: ['./productos-card.component.scss']
})
export class ProductosCardComponent {

  @Input() producto: any;

  //Imagen provisional, lueog habrá que pedirsela a la bd.
  img : String = "./assets/images/novedades/zapatilla1.png";

  // @ts-ignore
  get themeClass() : String | String[]{
    // @ts-ignore
    return document.querySelector("body").getAttribute('data-bs-theme') === 'light' ? 'dark-theme': 'light-theme';
  }

}
