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
  protected Auxproductos : Productos[]=[];

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

  showFilter(){
    document.getElementById('form-filter')?.classList.add('mostrar')
  }

  closeModal(){
    document.getElementById('form-filter')?.classList.remove('mostrar')

  }

  submit(minPrice : any, maxPrice : any, categoria: any){
    console.log('filtrar')
    console.log(minPrice)
    console.log(maxPrice)
    console.log(categoria
    )


    let filteredProductos = this.productos.filter(p => p.precio >= minPrice && p.precio <= maxPrice && p.categoria == categoria)
    console.log(filteredProductos)
    this.Auxproductos = this.productos;
    this.productos = filteredProductos;

    document.getElementById('form-filter')?.classList.remove('mostrar')

  }

  borrarFiltro(){
    if(this.Auxproductos.length > 0)
    this.productos = this.Auxproductos;
    // console.log(this.productos)
    document.getElementById('form-filter')?.classList.remove('mostrar')
  }
}
