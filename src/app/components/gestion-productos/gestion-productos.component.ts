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

  newProduct(nombre: any,descripcion: any,precio: any,stock: any,categoria: any){
    console.log("nuevo producto")

    console.log(nombre + "" + precio)

    let producto = {
      nombre: nombre,
      descripcion:descripcion,
      precio:precio,
      stock:stock,
      categoria:categoria,
    }

    this.productService.postProduct(producto).subscribe(response => {
      console.log('Producto creado:', response);
    });
    
    window.location.reload();


  }

  showModal(){
    document.getElementById('modal__aniadir')?.classList.add('d-block')
  }

  removeModal(){
    document.getElementById('modal__aniadir')?.classList.remove('d-block')

  }

}
