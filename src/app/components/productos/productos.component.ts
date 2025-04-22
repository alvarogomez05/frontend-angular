import { Component } from '@angular/core';
import {ProductosServiceService} from "../../sevices/productosService/productos-service.service";
import {Productos} from "../../models/productos.model";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {

  constructor(private productService : ProductosServiceService){}

  // @ts-ignore
  protected productos : Productos[]=[];
  loading: boolean = false;



  ngOnInit() {
    this.loading = true;
   this.productService.getProducts().subscribe(
     data => {
       this.productos = data;
       //console.log(this.productos);
       //this.loading = false;
     },
     error => {
       console.log(error);
       //this.loading = false;
     }
   )

    //para simular que tarda en cargar y asi comprobar que sale el spinner
    setTimeout(() => {
      this.loading = false;
    }, 2000);

  }
}
