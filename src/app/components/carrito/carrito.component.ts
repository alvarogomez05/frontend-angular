import { Component } from '@angular/core';
import { CarritoServiceService } from 'src/app/sevices/carritoService/carrito-service.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {

  constructor(private carritoService: CarritoServiceService){}

  ngOnInit(){
    //@ts-ignore
    let id = JSON.parse(localStorage.getItem('usuario'));
    console.log(id.user.usuario.id_cliente)
    this.carritoService.getCarritoById(id.user.usuario.id_cliente).subscribe(response =>{
      console.log(response)
      //Con los id de producto del response para llamar a cada producto por id y mostrarlo
    })
  }

}
