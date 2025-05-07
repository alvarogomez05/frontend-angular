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
       this.productos = data;
       this.loading = false;
     },
     error => {
       console.log(error);
     }
   )
  }
}
