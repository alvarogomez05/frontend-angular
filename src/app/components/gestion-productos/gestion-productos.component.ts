import { Component } from '@angular/core';
import { Productos } from 'src/app/models/productos.model';
import { ProductosServiceService } from 'src/app/sevices/productosService/productos-service.service';

@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.scss']
})
export class GestionProductosComponent {

  constructor(private productService : ProductosServiceService) {}

  protected productos : Productos[]=[];
  

  ngOnInit() {
    this.productService.getProducts().subscribe(
      data => {
        this.productos = data;
        console.log(this.productos);
        //this.loading = false;
      },
      error => {
        console.log(error);
        //this.loading = false;
      }
    )
  }

}
