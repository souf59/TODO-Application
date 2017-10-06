import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Todo from "../classes/Todo.model";

const API_BASE_URL: string = 'http://localhost:3000/todos/';
const API_USERS: string = 'users/';
@Injectable()
export class ApiserviceService {
  listedeTodos : Array<Todo> = [];

  constructor(private http: HttpClient) { }
  getUser(login:string) {

    return this.http.get(`${API_BASE_URL}${API_USERS}${login}`);
  }


}
