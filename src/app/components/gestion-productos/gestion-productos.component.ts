import { Component } from '@angular/core';
import { Productos } from 'src/app/models/productos.model';
import { ProductosServiceService } from 'src/app/sevices/productosService/productos-service.service';
import { Chart, registerables } from 'chart.js';
import { ComprasServiceService } from 'src/app/sevices/comprasService/compras-service.service';


@Component({
  selector: 'app-gestion-productos',
  templateUrl: './gestion-productos.component.html',
  styleUrls: ['./gestion-productos.component.scss']
})
export class GestionProductosComponent {

  constructor(private productService : ProductosServiceService, private comprasService : ComprasServiceService) {}

  protected productos : Productos[]=[];
  selectedFile: File | null = null;  
  totales: any [] = [0,0,0,0,0,0,0,0,0,0,0,0];

  chart() {



    Chart.register(...registerables); // Importante para que funcione

    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [{
          label: 'Facturación',
          // En data tengo que poner el total de las compras de cada mes
          data: [this.totales[0],this.totales[1] , this.totales[2], this.totales[3], this.totales[4], this.totales[5], this.totales[6], this.totales[7], this.totales[8], this.totales[9], this.totales[10], this.totales[11]],
          backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', 'red', 'yellow', 'cyan']
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

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
    
        console.log(this.productos);
      },
      error => {
        console.log(error);
      }
    );

    this.comprasService.getCompras().subscribe(response => {
      console.log(response)
      this.ordenarPorFecha(response);
    })


    
  }

  newProduct(nombre: any, descripcion: any, precio: any, stock: any, categoria: any) {
    console.log("nuevo producto");
    console.log(nombre + "" + precio);
  
    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('descripcion', descripcion);
    formData.append('precio', precio);
    formData.append('stock', stock);
    formData.append('categoria', categoria);
  
    if (this.selectedFile) {
      formData.append('imagen', this.selectedFile);
    } else {
      console.warn("No se seleccionó ninguna imagen");
    }
  
    this.productService.postProduct(formData).subscribe(response => {
      console.log('Producto creado:', response);
      window.location.reload(); // opcional
    });
  }

  showModal(){
    document.getElementById('modal__aniadir')?.classList.add('d-block')
  }

  removeModal(){
    document.getElementById('modal__aniadir')?.classList.remove('d-block')

  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

   ordenarPorFecha = (carrito : any) => {
    console.log(carrito)
    //@ts-ignore
    carrito.forEach(item => {
        console.log(item.fecha.substring(5,7));

        switch(item.fecha.substring(5,7)){
            case '01':
                this.totales[0] += parseInt(item.total);
            break;
            case '02':
                this.totales[1] += parseInt(item.total);
            break;
            case '03':
                this.totales[2] += parseInt(item.total);
            break;
            case '04':
                this.totales[3] += parseInt(item.total);
            break;
            case '05':
                this.totales[4] += parseInt(item.total);
            break;
            case '06':
                this.totales[5] += parseInt(item.total);
            break;
            case '07':
                this.totales[6] += parseInt(item.total);
            break;
            case '08':
                this.totales[7] += parseInt(item.total);
            break;
            case '09':
                this.totales[8] += parseInt(item.total);
            break;
            case '10':
                this.totales[9] += parseInt(item.total);
            break;
            case '11':
                this.totales[10] += parseInt(item.total);
            break;
            case '12':
                this.totales[11] += parseInt(item.total);
            break;
        }
    })

    console.log('Array con todos los totales guardados:')
    console.log(this.totales)
    this.chart();
}

cerrar(){
  document.getElementById('chart')?.classList.add('d-none')
}



}
