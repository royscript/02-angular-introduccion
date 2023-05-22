import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service'; /* LLamada al servicio de APIS */

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers : [UserService] /* Definimos el servicio en providers */
})
export class ListComponent implements OnInit {
  users: any;/* Definimos donde almacenaremos los datos */
  constructor(private _userService:UserService){/* Creacion de objeto tipo UserService */
    this.users = [];
  }
  getUser(pageNumber:number) { 
    this._userService.getUsers(pageNumber).subscribe( (response) => { 
      this.users = response;
    }, 
      (error) => { 
        console.log(error); 
    }); 
  }

  deleteUser(id:number, index:any) { 
    this._userService.deleteUser(id).subscribe( (response) => { 
      /*Una vez se ha eliminado en el back procedemos a eliminarlo directamente 
        del array para evitar tener que llamar nuevamente al método get */ 
        this.users.data.splice(index, 1); 
    }, (error) => { console.log(error) }); 
  }
  ngOnInit(){
    this.getUser(1);
  }
}
