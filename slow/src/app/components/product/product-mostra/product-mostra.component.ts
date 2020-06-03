import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-mostra',
  templateUrl: './product-mostra.component.html',
  styleUrls: ['./product-mostra.component.css']
})
export class ProductMostraComponent implements OnInit {

  products: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

}