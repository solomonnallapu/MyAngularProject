import { Component, OnInit } from '@angular/core';
import { FreeApiService } from '../services/free-api.service';
import { comments } from '../classes/comments';


@Component({
  selector: 'app-api-calls',
  templateUrl: './api-calls.component.html',
  styleUrls: ['./api-calls.component.scss']
})
export class ApiCallsComponent implements OnInit {
  lstcomments:comments[];
  
  constructor(private _freeApiService: FreeApiService) { }

  ngOnInit() {
    this._freeApiService.getcomments()
    .subscribe(
      data=>{
        this.lstcomments = data; // Typecasting the data returned from the API to our list
      }
    )
  }


}
