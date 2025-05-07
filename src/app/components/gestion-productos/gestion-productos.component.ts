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
  selectedFile: File | null = null;  

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

}
