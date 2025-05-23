import { Component, Input } from '@angular/core';
import { CarritoServiceService } from 'src/app/sevices/carritoService/carrito-service.service';
import { FavoritosServiceService } from 'src/app/sevices/favoritosService/favoritos-service.service';
import { ProductosServiceService } from 'src/app/sevices/productosService/productos-service.service';

@Component({
  selector: 'app-productos-card',
  templateUrl: './productos-card.component.html',
  styleUrls: ['./productos-card.component.scss']
})
export class ProductosCardComponent {

    constructor(private productService : ProductosServiceService, private CarritoService: CarritoServiceService, private FavoritoService : FavoritosServiceService) {}

  @Input() producto: any;

  //Imagen provisional, lueog habrá que pedirsela a la bd.
  img: String = "./assets/images/novedades/zapatilla1.png";

  // @ts-ignore
  get themeClass(): String | String[] {
    // @ts-ignore
    return document.querySelector("body").getAttribute('data-bs-theme') === 'light' ? 'dark-theme' : 'light-theme';
  }

  rol = '';
  //@ts-ignore
  id_cliente: string = JSON.parse(localStorage.getItem('usuario'));


  ngOnInit() {
    //@ts-ignore
    this.rol = JSON.parse(localStorage.getItem('usuario')).rol
  }

  // Coger el id del producto elegido

 
  // borrar producto

  update(id: any,nombre: any,descripcion: any,precio: any,stock: any,categoria: any) {
    let data = {
      nombre: nombre,
      descripcion: descripcion,
      precio: precio,
      stock: stock,
      categoria: categoria
    }

    this.productService.updateProduct(id,data).subscribe(response =>{
      console.log(response)
    })

    window.location.reload();
  }

  // editar producto

  delete(id: any) {
    
    this.productService.deleteProduct(id).subscribe(response => {
      console.log(response)
    })

    window.location.reload();

  }

  showModal(id: { toString: () => string; }){
    console.log(id.toString())
    console.log(document.getElementById(id.toString()))
    document.getElementById(id.toString())?.classList.remove('d-none')
  }

  removeModal(id: any){
    document.getElementById(id.toString())?.classList.add('d-none')
  }

  PostCarrito(id_cliente: any,id_producto: any){
    this.CarritoService.PostCarrito(id_cliente.user.usuario.id_cliente,id_producto).subscribe(response =>{
      console.log(response)
      window.location.reload();

    })
  }

  PostFavoritos(id_cliente: any,id_producto:any){
    this.FavoritoService.PostFavoritos(id_cliente.user.usuario.id_cliente,id_producto).subscribe(response => {
      console.log(response)
      window.location.reload();
    })
  }
}
