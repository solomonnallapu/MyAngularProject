import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FreeApiService {

  constructor(private httclient: HttpClient) { }
  getcomments():Observable <any>{
    return this.httclient.get("https://jsonplaceholder.typicode.com/posts/1/comments");
  }
}
