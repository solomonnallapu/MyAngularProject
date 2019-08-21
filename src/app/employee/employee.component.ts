import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ChangeDetectorRef} from '@angular/core' ;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employee:any=[];

  constructor(private http: HttpClient,
    public cd:ChangeDetectorRef) { }

  ngOnInit() {

    this.getEmployeeDetails();
   
  }

  getEmployeeDetails(){
let url='http://dummy.restapiexample.com/api/v1/employees'
this.http.get(url).subscribe((response:any)=>{
  this.employee = response

});

// url = 'https://www.sell.essexindia.com/api/client-getLeadsDataffff'
// let params = {
//   limit :3,
//   sort_object: {credits: 1}

// }
// this.http.post(url,params).subscribe((response:any)=>{
//   console.log(response)

// })
  }
}
