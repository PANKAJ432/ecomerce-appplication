import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthapiService {

  constructor(private http:HttpClient) { }


  signUpUser(userData:User){
    return this.http.post('http://localhost:3000/signupData',userData);

  }
  logUserByEmail(email:string){
    return this.http.get(`http://localhost:3000/signupData?email=${email}`);

  }
}
