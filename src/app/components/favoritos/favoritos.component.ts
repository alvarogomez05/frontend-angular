import { Component } from '@angular/core';
import { Favorito } from 'src/app/models/favorito.model';
import { Productos } from 'src/app/models/productos.model';
import { CarritoServiceService } from 'src/app/sevices/carritoService/carrito-service.service';
import { FavoritosServiceService } from 'src/app/sevices/favoritosService/favoritos-service.service';
import { ProductosServiceService } from 'src/app/sevices/productosService/productos-service.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent {

  constructor(private FavoritoService: FavoritosServiceService , private productService : ProductosServiceService, private CarritoService: CarritoServiceService) {}

  favoritos: Favorito[] = []; // al principio de tu componente
  productos: Productos[]=[];
  subtotal: number = 0;
  productosFav: any[]=[];
  //@ts-ignore
  id: string = JSON.parse(localStorage.getItem('usuario'));

  ngOnInit(){
    //@ts-ignore
    // console.log(id.user.usuario.id_cliente)
    this.FavoritoService.getFavoritosById(this.id.user.usuario.id_cliente).subscribe(response =>{
      console.log(response)
      this.favoritos = response;
      //Con los id de producto del response para llamar a cada producto por id y mostrarlo
      if(this.favoritos.length > 0){
      
        this.favoritos.forEach(fav => {
          console.log(fav)
          this.getProductsFav(fav.id_producto);
        });

        console.log(this.productos)
      }
    })
    
  }

  getProductsFav(id: any){
    console.log(id)
    this.productService.getProductoById(id).subscribe(result => {
      // console.log(result)

      let aux =  result.map((producto : any) => {
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

      // console.log(aux);
      
      this.productosFav.push(aux[0]);
      this.productos.push(aux[0])
      console.log(this.productosFav)
      this.CalcSubtotal();
    })
  }

  CalcSubtotal(){
    this.productos.forEach(p =>{
      this.subtotal += p.precio;
    })
  }

  PostCarrito(id: any,id_producto: any){
    this.CarritoService.PostCarrito(id.user.usuario.id_cliente,id_producto).subscribe(response =>{
      console.log(response)
      window.location.reload();

    })
  }

  DeleteFavorito(id: any,id_producto: any){
    this.FavoritoService.deleteFavoritos(id.user.usuario.id_cliente,id_producto).subscribe(response => {
      console.log(response)
      window.location.reload();

    })
  }

}
