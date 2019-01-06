import { Injectable } from '@angular/core';
// import {Http,Response} from '@angular/http';
import {HttpClient,HttpHeaders} from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
}
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class AppServiceService {

  constructor(private http:HttpClient) {
   }
   getusers() {
     return this.http.get('/server/api/users');
   }
   getuser(userid:number){
return this.http.get('/server/api/users/'+userid);
   }
   createUser(user){
     let body=JSON.stringify(user)
    return  this.http.post('/server/api/teacher_signup',body,httpOptions);
   }
}
