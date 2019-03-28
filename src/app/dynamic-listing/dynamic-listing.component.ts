import { Component, OnInit } from '@angular/core';
import data from '../../assets/json/data.json';
import profession from '../../assets/json/profession.json';
import { CommentStmt } from '@angular/compiler';


////////////////////////////////////// Designers Array ////////////////////////////////////////
const Designers = [
  {
    name: 'Solomon'
  },
  {
    name: 'Venkat'
  },
  {
    name: 'Praveen'
  },
  {
    name: 'Jeevan'
  },
  {
    name: 'Pradeep'
  },
  {
    name: 'Solomon'
  },
  {
    name: 'Venkat'
  },
  {
    name: 'Praveen'
  },
  {
    name: 'Jeevan'
  },
  {
    name: 'Pradeep'
  }
]
@Component({
  selector: 'app-dynamic-listing',
  templateUrl: './dynamic-listing.component.html',
  styleUrls: ['./dynamic-listing.component.scss']
})


export class DynamicListingComponent implements OnInit {
  


  Sol = Designers;
  prof: any;
  activeVariable = true
  selectedType: string;
  selected: string;
  colorChangeCondition : string;
  liColor = true
  personDetails: any;
  a:any;
  b: number;


  constructor() {

  }

  ngOnInit() {
    this.personDetails =  data;
    // this.clickFunc();
    // this.selectedType = 'loyalty';
    // this.selected = 'loyalty';
 
  let sum = this.add(2,2);
  console.log('SUMMM', sum);
  this.disp_details(123,"John");
  this.disp_details(111,"mary","mary@xyz.com");
  }

  navActive(type) {
    this.selectedType = type;
  
  }

  clickFunc1(select) {
    this.selected = select;
  }
  onClickChangeColor(select){
    this.colorChangeCondition = select;
    console.log(select);
    function doSomething(){
      for (var i = 0; i<5; i++){
        console.log(i)
      }
      console.log('finally :' +i);
    }
    doSomething()
  }
  add(a,b) {
    return a * b;
  }
   disp_details(id:number,name:string,mail_id?:string) { 
    console.log("ID:", id); 
    console.log("Name",name); 
    
    if(mail_id!=undefined)  
    console.log("Email Id",mail_id); 
 }

}
