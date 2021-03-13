import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  title = 'ecommerce-tiz';
  navbarItem: string [] = ['Tienda', 'Contactanos', 'Nosotros'];
  isLoged = true;

  products = {
    title: 'polo',
    precio: 12,
    image: 'image.jpg',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, recusandae ipsa neque officiis nam porro praesentium asperiores laudantium voluptatum unde, rem nesciunt a suscipit qui aliquam. Natus sint ratione consequatur?'
  };

  date = Date.now();

  addItem(): void {
    this.navbarItem.push(this.title);
  }
}
