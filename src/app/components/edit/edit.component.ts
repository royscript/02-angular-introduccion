import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user?:any;
  id?: number;
  nombre = new FormControl('');
  email = new FormControl('');
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _userService: UserService
    ) {

  }
  getUserById(id:number){
    this._userService.getUserById(id).subscribe((response)=>{
      this.user = response.data;
      this.nombre.setValue(this.user.first_name);
      this.email.setValue(this.user.email);
      console.log(this.user);
    }, (errors)=>{
      console.log(errors);
    })
  }
  editUser() {
    const userUpdate: User = {
      id: this.id?.toString() || '',
      first_name: this.nombre?.value || '',
      last_name: '',
      name: '',
      email: this.email.value || '',
      job: '',
      createdAt: new Date()
    };
    this._userService.updateUser(this.id as number, userUpdate).subscribe(
      (params) => {
        console.log(params);
        this.router.navigate(['list']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getUserById(this.id as number);
      console.log(params);
    });
  }

}