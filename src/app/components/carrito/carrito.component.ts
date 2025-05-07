import { Component } from '@angular/core';
import { Productos } from 'src/app/models/productos.model';
import { CarritoServiceService } from 'src/app/sevices/carritoService/carrito-service.service';
import { ProductosServiceService } from 'src/app/sevices/productosService/productos-service.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {

  constructor(private carritoService: CarritoServiceService,private productService : ProductosServiceService){}

  carritoItems= 0;
  productos: Productos []=[];
  subtotal =0;
  //@ts-ignore
  id = JSON.parse(localStorage.getItem('usuario')).user.usuario.id_cliente;

  ngOnInit(){
    //@ts-ignore
    console.log(this.id)
    this.carritoService.getCarritoById(this.id).subscribe(response =>{
      console.log(response)
      //Con los id de producto del response para llamar a cada producto por id y mostrarlo
    })

    this.UpdateBadge();
  }

  UpdateBadge(){
    //@ts-ignore
     console.log(this.id)
     this.carritoService.getCarritoById(this.id).subscribe(response =>{
      console.log(response)
      this.GetCarrito(response);
      this.carritoItems = response.length;
     })
  }

  GetCarrito(array: any){
    //@ts-ignore
    array.forEach((element) => {
    //@ts-ignore
      this.productService.getProductoById(element.id_producto).subscribe(result => {
        console.log(result)
        this.productos.push(result[0]);
        this.CalcSubtotal();
      })
    });
  }

  CalcSubtotal(){
    this.productos.forEach(p =>{
      this.subtotal += p.precio;
    })
  }

  DeleteCarrito(id_cliente: any,id_producto: any){
    this.carritoService.DeleteCarrito(id_cliente,id_producto).subscribe(response => {
      // console.log(response)
      window.location.reload();
    })
  }

}
