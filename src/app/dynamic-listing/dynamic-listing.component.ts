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
  taskList: string;
 genderType : any;
 selectTag : any;
deselectTask = false;
  data = {};

  constructor() {}
  ngOnInit() {
    this.personDetails = data;
    this.complexData = complex;
    this.prof = profession;
    this.myCities = cities;
    this.myCourses = courses;
    this.selectTag='selectCourse'
    // this.clickFunc();
    // this.selectedType = 'loyalty';
    // this.selected = 'loyalty';
    console.log(this.data);
  }
  openDiv(gtype){
this.genderType= gtype;

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
  onSubmit() {
    alert(JSON.stringify(this.data));
    if (this.selectTag == "selectCourse"){
      alert(JSON.stringify('Please select any Course'));
      console.log('slect option');
    }
  }
  taskClicked(taskName) {
    console.log("Value received", taskName);
    this.deselectTask = !this.deselectTask
    if (this.deselectTask) {
      this.taskList = taskName;
    }else {
      this.taskList = 'deselected';
    }
    
  }
  // doSomething(x){
  //   console.log(x);
  // }
}
