import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogeComponent } from '../components/dialoge/dialoge.component';

@Injectable({
  providedIn: 'root'
})
export class DialogeService {

  constructor(
    private _matDialoge : MatDialog
  ) { }

  openDialog(title : string, message : string){
    const _dialogRef = this._matDialoge.open(DialogeComponent,{
      width : "300px",
       data :{title, message}
    });
    return _dialogRef.afterClosed()
  }
}
