import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  // @Input() for get data from parent component
  @Input() product: Product | undefined;

  // @Output() pass data to parent component
  @Output() notify = new EventEmitter();
  @Output() msg = new EventEmitter();
}
