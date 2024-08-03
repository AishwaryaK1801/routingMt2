import { Component, OnInit } from '@angular/core';
import { Iusers } from '../../models/users.interface';
import { IProducts } from '../../models/products.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  prodData!:Array<IProducts>

  constructor(
    private _prodService : ProductsService
  ) { }

  ngOnInit(): void {
    this.prodData=this._prodService.fetchProducts()
  }

}
