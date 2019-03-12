import { Component } from '@angular/core';
import data from '../assets/json/data.json';
import profession from '../assets/json/profession.json'
  

////////////////////////////////////// Designers Array ////////////////////////////////////////
const Designers =[
    {
      name : 'Solomon'
    },
    {
      name : 'Venkat'
    },
    {
      name : 'Praveen'
    },
    {
      name : 'Jeevan'
    },
    {
      name : 'Pradeep'
    },
    {
      name : 'Solomon'
    },
    {
      name : 'Venkat'
    },
    {
      name : 'Praveen'
    },
    {
      name : 'Jeevan'
    },
    {
      name : 'Pradeep'
    }
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Practise-Lab';
  selectedType: string;

  selected: string;

  // activeCondition = true
  // activefunc(){
  //   console.log('Working');
  //   this.activeCondition = !this.activeCondition
  // }

  Sol = Designers;
  prof :any;

  activeVariable = true
  dNames: any;
  dNumbers: any;
liColor = true

  constructor() {

    this.dNames = data.names;
    this.dNumbers = data.numbers;
    
    this.prof=profession.jobs;

  }

  ngOnInit() {
    this.clickFunc();
    this.selectedType = 'loyalty';
    this.selected = 'loyalty'
  }
  clickFunc() {
    console.log('Working');
    this.activeVariable = !this.activeVariable;
  }
  navActive(type) {
    this.selectedType = type;
    // console.log('Type', type);
    // this.ActiveCondition = !this.ActiveCondition;
  }

  clickFunc1(select) {
    this.selected = select;
  }
}
