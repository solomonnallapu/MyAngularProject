import { Component, OnInit } from '@angular/core';
import data from '../../assets/json/data.json';
import profession from '../../assets/json/profession.json';
import { AnonymousSubject } from 'rxjs/internal/Subject';

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
  selectedType: string;
  selected: string;
  colorChangeCondition : string;

  // activeCondition = true
  // activefunc(){
  //   console.log('Working');
  //   this.activeCondition = !this.activeCondition
  // }

  Sol = Designers;
  prof: any;

  activeVariable = true
  // hNames: any;
  // hAge: any;
  // hLocations: any;
  // hQualification:any;
  // hCourses:any;
  // hMarksTenth:any;
  // hMarksIntermediate:any;
  // hMarksBtech:any;
  liColor = true
  personDetails: any;

  constructor() {

    
  }

  ngOnInit() {
    this.personDetails =  data;
    // this.clickFunc();
    // this.selectedType = 'loyalty';
    // this.selected = 'loyalty';
    // this.hNames = data.Name;
    // this.hAge = data.Age;
    // this.hLocations = data.Locations;
    // this.hQualification = data.Qualification;
    // this.hCourses = data.Courses;
    // this.hMarksTenth = data.Marks.Tenth;
    // this.hMarksIntermediate = data.Marks.Intermediate;
    // this.hMarksBtech = data.Marks.Btech;
    // this.prof = profession.jobs;
  }

  navActive(type) {
    this.selectedType = type;
    // console.log('Type', type);
    // this.ActiveCondition = !this.ActiveCondition;
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

}
