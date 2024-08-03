import { Component, Inject, OnInit } from '@angular/core';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialoge',
  templateUrl: './dialoge.component.html',
  styleUrls: ['./dialoge.component.scss']
})
export class DialogeComponent implements OnInit {

  constructor(
    private _dialogRef : MatDialogRef<DialogeComponent>,
    @Inject(MAT_DIALOG_DATA) public data : {title : string, message :string}
  ) { }

  ngOnInit(): void {
  }

  onConfirm(){
    this._dialogRef.close(true)
  }
}
