import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  providers : [UserService]
})
export class NewComponent implements OnInit{
  user:User;
  constructor(private _userService:UserService){/* Inyeccion de dependencias a traves del constructor */
    this.user = new User();
  }
  ngOnInit(){
    this.user.name = "Roy";
    this.user.job = "Informático";
    this.createUser(this.user);
  }
  createUser(obj:User) { 
    this._userService.createUser(obj).subscribe(
      (response) => {
        this.user = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    )
  }
  updateUser(id:number,par:any){
    this._userService.updateUser(id,par).subscribe(
      (response)=>{
        this.user = response;
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}
