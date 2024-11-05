import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-detail-list',
  standalone: true,
  imports: [NgIf],
  templateUrl: './item-detail-list.component.html',
  styleUrl: './item-detail-list.component.css'
})
export class ItemDetailListComponent {

  @Input() item: string = '';

}
