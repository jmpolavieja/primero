import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TarjetaProductoComponent} from './tarjeta-producto/tarjeta-producto.component';
import {SaludoComponent} from './saludo/saludo.component';
import { TablaComponent } from "./tabla/tabla.component";
import { UsuarioComponent } from './usuario/usuario.component';
import { ItemListComponent } from "./item-list/item-list.component";
import { ItemDetailListComponent } from "./item-detail-list/item-detail-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SaludoComponent, TarjetaProductoComponent, TablaComponent, UsuarioComponent, ItemListComponent, ItemDetailListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'el texto que queráis';
  elUsuario = { name: 'Jorge Antonio', apellidos: 'Pérez de las Marismas', edad: 58 };
  item: string = '';

  mostrarDetalle(animal: string) {
    this.item = animal;
  }
}
