import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private Http:HttpClient) { }

  getUsers(){

    let url ="https://jsonplaceholder.typicode.com/users";
    return this.Http.get(url)
  }
}
