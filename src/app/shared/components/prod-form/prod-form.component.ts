import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidService } from '../../services/uuid.service';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogeService } from '../../services/dialoge.service';
import { IProducts } from '../../models/products.interface';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.scss']
})
export class ProdFormComponent implements OnInit {

  prodForm !:FormGroup;
  isInEditMode : boolean = false;
  prodId !: string;
  prodObj !: IProducts;
  canReturn !: number;

  constructor(
    private _uuid : UuidService,
    private _ProdService : ProductsService,
    private _router : Router,
    private _routes : ActivatedRoute,
    private _dialog : DialogeService
  ) { }

  ngOnInit(): void {
    this.createProdForm();
    this.checkIsInEditMode();
    this.manageQueryParams();
   }

   createProdForm(){
    this.prodForm = new FormGroup({
    pname : new FormControl(null, [Validators.required]),
    pStatus : new FormControl(null, [Validators.required]),
    canReturn : new FormControl(null, [Validators.required]),
    productImg : new FormControl(null, [Validators.required]),
    productDescription : new FormControl(null, [Validators.required])
    })
   }

   checkIsInEditMode(){
    this.prodId= this._routes.snapshot.params['productId'] ;
    if(this.prodId){
      this.isInEditMode=true;
      this.prodObj=this._ProdService.getProductDetails(this.prodId);
      console.log(this.prodObj);
      
      let canReturnString = this.prodObj.canReturn.toString();

      this.prodForm.patchValue({...this.prodObj, canReturn : canReturnString})
    }
    else{
      this.isInEditMode=false
    }
   }

   manageQueryParams(){
    this.canReturn = this._routes.snapshot.queryParams['canReturn'];
    console.log(this.canReturn);
    if(this.canReturn){
      if(this.canReturn==0){
        this.prodForm.disable();
      }
      else{
        this.prodForm.enable()
      }
    }
   }

   onSubmit(){
    if(this.prodForm.valid){
      let newProd = {...this.prodForm.getRawValue(), pId : this._uuid.uuid(), canReturn : +this.prodForm.get('canReturn')?.value}
      console.log(newProd);
      this._ProdService.addProduct(newProd)
    }
   }
   onUpdate(){
    if(this.prodForm.valid){
      let updatedObj = this.prodForm.getRawValue();
      this._ProdService.updateProd({...updatedObj, pId : this.prodId, canReturn : +this.prodForm.get('canReturn')?.value})
    }
   }
}
