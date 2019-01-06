import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import {FormGroup,FormControl,Validator, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-teacher-signin',
  templateUrl: './teacher-signin.component.html',
  styleUrls: ['./teacher-signin.component.css']
})
export class TeacherSigninComponent implements OnInit {
public users:any;
userRegistry:FormGroup;
  constructor(private appService:AppServiceService) { }

  ngOnInit() {
    var self=this;
    this.getUsers();
    self.userRegistry=new FormGroup({
      name:new FormControl('',Validators.required),
      age:new FormControl('',Validators.required),
    });
  }
//   lecturer_register(tname,age){
// this.name=tname;
// this.age=age;
// console.log("this is "+this.name+ " "+"teaches"+this.age);
//   }
getUsers(){
  var self=this;
  this.appService.getusers().subscribe(
    data => { self.users = data},
    err => console.error(err),
    ()=>console.log("users  loaded")
  );
  console.log(this.users);
}
Create_Form(){
  if(this.userRegistry.valid){
  this.appService.createUser(this.userRegistry.value).subscribe(
    data =>{this.userRegistry.reset();
    return true;
  },
  error=> {return Observable.throw(error);
  }
  )
  }else{

  }
}
}
