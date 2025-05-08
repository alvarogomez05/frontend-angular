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
  loading: boolean = true;

  ngOnInit() {
    this.productService.getProducts().subscribe(
      data => {
        this.productos = data.map(producto => {
          //@ts-ignore
          if (producto.imagen && producto.imagen.data) {
          //@ts-ignore
            const byteArray = new Uint8Array(producto.imagen.data);
            const blob = new Blob([byteArray], { type: 'image/png' }); // Ajusta el tipo si no es PNG
            const imageUrl = URL.createObjectURL(blob);
            return { ...producto, imageUrl };
          }
          return producto;
        });
        this.loading = false;
        console.log(this.productos);
      },
      error => {
        console.log(error);
      }
    );
  }
}
