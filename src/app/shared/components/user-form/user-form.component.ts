import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Iusers } from '../../models/users.interface';
import { UuidService } from '../../services/uuid.service';
import { UsersService } from '../../services/users.service.spec';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogeService } from '../../services/dialoge.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  userForm !:FormGroup;
  isInEditMode : boolean = false;
  userId !: string;
  userObj !: Iusers;
  userRole !: string;

  constructor(
    private _uuid : UuidService,
    private _userService : UsersService,
    private _router : Router,
    private _routes : ActivatedRoute,
    private _dialog : DialogeService
  ) { }

  ngOnInit(): void {
    this.createUserForm();
    this.checkIsInEditMode();
    this.manageQueryParams();
  }

  createUserForm(){
    this.userForm = new FormGroup({
    userName : new FormControl(null, [Validators.required]),
    personImg : new FormControl(null, [Validators.required]),
    userDetails : new FormControl(null, [Validators.required]),
    userRole : new FormControl(null, [Validators.required]),
    })
   }

   checkIsInEditMode(){
    this.userId= this._routes.snapshot.params['userId'] ;
    if(this.userId){
      this.isInEditMode=true;
      this.userObj=this._userService.getUserDetails(this.userId);
      console.log(this.userObj);


      this.userForm.patchValue(this.userObj)
    }
    else{
      this.isInEditMode=false
    }
   }

   manageQueryParams(){
    this.userRole = this._routes.snapshot.queryParams['userRole'];
    console.log(this.userRole);
    if(this.userRole){
      if(this.userRole=='buyer'){
        this.userForm.disable();
      }
      else{
        this.userForm.enable()
      }
    }
   }


   onSubmit(){
    if(this.userForm.valid){
      let newUser = {...this.userForm.getRawValue(), userId : this._uuid.uuid()}
      console.log(newUser);
      this._userService.addUser(newUser)
    }
   }
   onUpdate(){
    if(this.userForm.valid){
      let updatedObj = this.userForm.getRawValue();
      this._userService.updateUser({...updatedObj, userId : this.userId})
    }
   }

}
