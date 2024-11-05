import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarjeta-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tarjeta-producto.component.html',
  styleUrl: './tarjeta-producto.component.css'
})
export class TarjetaProductoComponent {

  nombreProducto: string = 'Porsche 911 Carrera';
  precioProducto: number = 150000;
  mensaje = 'Esto es un mensaje';

  saludo2() {
    this.mensaje = 'Saludos desde la Galaxia';
  }

  descuento() {
    this.precioProducto -= 100;
  }
}
