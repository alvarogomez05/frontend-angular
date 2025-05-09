import { Component } from '@angular/core';
import { Productos } from 'src/app/models/productos.model';
import { CarritoServiceService } from 'src/app/sevices/carritoService/carrito-service.service';
import { ComprasServiceService } from 'src/app/sevices/comprasService/compras-service.service';
import { ProductosServiceService } from 'src/app/sevices/productosService/productos-service.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {

  constructor(private carritoService: CarritoServiceService, private productService: ProductosServiceService, private comprasService: ComprasServiceService) { }

  carritoItems = 0;
  productos: Productos[] = [];
  subtotal = 0;
  productosFav: any[] = [];
  carrito: any[] = [];
  //@ts-ignore
  id = JSON.parse(localStorage.getItem('usuario')).user.usuario.id_cliente;

  ngOnInit() {
    //@ts-ignore
    console.log(this.id)
    this.carritoService.getCarritoById(this.id).subscribe(response => {
      // console.log(response)
      //Con los id de producto del response para llamar a cada producto por id y mostrarlo
    })

    this.UpdateBadge();
  }

  UpdateBadge() {
    //@ts-ignore
    console.log(this.id)
    this.carritoService.getCarritoById(this.id).subscribe(response => {
      console.log(response)
      this.GetCarrito(response);
      this.carrito = response;
      this.carritoItems = response.length;
    })
  }

  GetCarrito(array: any) {
    //@ts-ignore
    array.forEach((element) => {
      //@ts-ignore
      this.productService.getProductoById(element.id_producto).subscribe(result => {
        // console.log(result)

        let aux = result.map((producto: any) => {
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

        let aux2 = aux.map((producto: any) => {
          const carro = this.carrito.find(c => c.id_producto === producto.id_producto);
          if (carro) {
            return { ...producto, cantidad: carro.cantidad };
          }
          return producto;
        });

        // console.log(aux2)


        this.productosFav.push(aux2[0]);
        this.productos.push(aux[0])
        // console.log(this.productosFav)
        this.subtotal += aux2[0].precio * aux2[0].cantidad;
      })
    });
  }



  DeleteCarrito(id_cliente: any, id_producto: any) {
    this.carritoService.DeleteCarrito(id_cliente, id_producto).subscribe(response => {
      // console.log(response)
      window.location.reload();
    })
  }

  dynamicClasses() {
    if (this.carritoItems == 0) {
      return 'grayscale'
    }

    return ''
  }

  mostrarPasarelaDePago() {
    console.log("comprar")
    document.getElementById('pasarela')?.classList.remove('d-none')
  }

  OcultarModal() {
    document.getElementById('pasarela')?.classList.add('d-none')
  }

  Comprar() {
    // insertar en compras
    let date = new Date().toISOString().split('T')[0];
    console.log(date)
    let id_cliente = this.id;

    this.productosFav.forEach(producto => {
      let compra = {
        fecha: date,
        total: producto.precio * producto.cantidad,
        id_cliente: id_cliente,
        id_producto: producto.id_producto
      }
      console.log(compra)

      this.comprasService.postCompras(compra).subscribe(response => {
        // console.log(response)
      })

      // borrar carrito

      this.DeleteCarrito(id_cliente, producto.id_producto)

    })

    // actualizar el stock¿?
  }
}
