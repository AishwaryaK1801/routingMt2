import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from '../../models/products.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  getId !: string
  getObj !: IProducts
  constructor(
    private _routes : ActivatedRoute,
    private _prodService : ProductsService
  ) { }

  ngOnInit(): void {

    this.getId= this._routes.snapshot.params['productId'];
    console.log(this.getId);
    if(this.getId){
     this.getObj= this._prodService.getProductDetails(this.getId)
    }
  }

  onProductRemove(){
    this._prodService.removeProduct(this.getId)
  }
}
