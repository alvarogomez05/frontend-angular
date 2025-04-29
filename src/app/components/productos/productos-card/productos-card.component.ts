import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-productos-card',
  templateUrl: './productos-card.component.html',
  styleUrls: ['./productos-card.component.scss']
})
export class ProductosCardComponent {

  @Input() producto: any;

  //Imagen provisional, lueog habrá que pedirsela a la bd.
  img: String = "./assets/images/novedades/zapatilla1.png";

  // @ts-ignore
  get themeClass(): String | String[] {
    // @ts-ignore
    return document.querySelector("body").getAttribute('data-bs-theme') === 'light' ? 'dark-theme' : 'light-theme';
  }

  rol = '';

  ngOnInit() {

    //@ts-ignore
    this.rol = JSON.parse(localStorage.getItem('usuario')).rol
  }

  // Coger el id del producto elegido

  takeId(event: Event){
    let id = 0;

    //@ts-ignore
    if (event.target.tagName == "SPAN") {
      //@ts-ignore
      id= event.target.parentElement.parentElement.parentElement.id;
    }else{
      ///@ts-ignore
      id= event.target.parentElement.parentElement.parentElement.parentElement.id;
    }

    console.log("id del producto: " + id)
    return id;
  }

  // borrar producto

  update(event: Event) {
    let id = this.takeId(event)

  }

  // editar producto

  delete(event: Event) {
    let id = this.takeId(event)
    
  }

}
