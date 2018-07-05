import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: String = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.baseUrl}/users`);
  }

  getUser(id) {
    return this.http.get(`${this.baseUrl}/users/${id}`);
  }

  getPosts() {
    return this.http.get(`${this.baseUrl}/posts`);
  }
}
