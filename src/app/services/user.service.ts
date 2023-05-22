import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Pagination } from '../models/pagination.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public headers = new HttpHeaders().set('Content-Type', 'application/json'); 
  url?: string;

  constructor(public _http:HttpClient, ) { 
    this.url = "https://reqres.in/api/"; /* endpoint */
  }

  //devolverá un observable de un arreglo de cualquier tipo(any) 
  getUsers(pageNumber:number): Observable<Pagination> { 
    return this._http.get<Pagination>(this.url + "users?page=" + pageNumber);
  }
  getUserById(id:number): Observable<Pagination> { 
    return this._http.get<Pagination>(this.url + "users/" + id);
  }
  createUser(par:any): Observable<User> { 
    let params = JSON.stringify(par); 
    return this._http.post<User>(this.url + "users", params, { headers: this.headers }); 
  }

  updateUser(id:number,par:any): Observable<User>{
    // Transformo el objeto a un json string
    let params = JSON.stringify(par);
    //paso por parámetro la url, los parametros del cuerpo de la petición y la cabecera de la petición
    return this._http.put<User>(this.url + "users/"+id, params, { headers: this.headers });
  }

  deleteUser(id:number): Observable<User> { 
    return this._http.delete<User>(this.url + "users/" + id, { headers: this.headers }); 
  }
}
