import { NgForOf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {

  items = [
    'Ratón', 'Gato', 'Perro', 'Hiena', 'León', 'Pantera'
  ];
  @Output() selectItem = new EventEmitter<string>();

  onClick(item: string){
    this.selectItem.emit(item);
  }
}
