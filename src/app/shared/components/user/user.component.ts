import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service.spec';
import { Iusers } from '../../models/users.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  getId !: string
  getObj !: Iusers
  constructor(
    private _routes : ActivatedRoute,
    private _userService : UsersService
  ) { }

  ngOnInit(): void {
    this.getId= this._routes.snapshot.params['userId'];
    console.log(this.getId);
    if(this.getId){
     this.getObj= this._userService.getUserDetails(this.getId)
    }
  }

  onUserRemove(){
    this._userService.removeUser(this.getId)
  }
}
