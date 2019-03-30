import { Component, OnInit } from "@angular/core";
import data from "../../assets/json/data.json";
import profession from "../../assets/json/profession.json";
import { CommentStmt } from "@angular/compiler";
import complex from "../../assets/json/complex.json";
import cities from "../../assets/json/cities.json";
import courses from "../../assets/json/courses.json";

////////////////////////////////////// Designers Array ////////////////////////////////////////
const Designers = [
  {
    name: "Solomon"
  },
  {
    name: "Venkat"
  },
  {
    name: "Praveen"
  },
  {
    name: "Jeevan"
  },
  {
    name: "Pradeep"
  },
  {
    name: "Solomon"
  },
  {
    name: "Venkat"
  },
  {
    name: "Praveen"
  },
  {
    name: "Jeevan"
  },
  {
    name: "Pradeep"
  }
];
@Component({
  selector: "app-dynamic-listing",
  templateUrl: "./dynamic-listing.component.html",
  styleUrls: ["./dynamic-listing.component.scss"]
})
export class DynamicListingComponent implements OnInit {
  Sol = Designers;
  prof: any;
  activeVariable = true;
  selectedType: string;
  selected: string;
  colorChangeCondition: string;
  liColor = true;
  personDetails: any;
  a: any;
  b: number;
  complexData: any;
  name: any;
  age: number;
  myCities: any;
  myCourses: any;
  firstName: any;

  constructor() {}

  ngOnInit() {
    this.personDetails = data;
    this.complexData = complex;
    this.prof = profession;
    this.myCities = cities;
    this.myCourses = courses;
    // this.clickFunc();
    // this.selectedType = 'loyalty';
    // this.selected = 'loyalty';
  }

  navActive(type) {
    this.selectedType = type;
  }

  clickFunc1(select) {
    this.selected = select;
  }
  onClickChangeColor(select) {
    this.colorChangeCondition = select;
  }

  checkNameAndAge() {
    console.log("Name ::", this.name, "Age:", this.age);
  }
  nameFunc(x) {
    console.log(x,'Name is working');
  }
  passFunc(y){
      console.log(y, 'Password is working');
  }
  ageFunc(ag){
      console.log(ag, 'Age is working');
  }
}
