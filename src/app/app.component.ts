import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Practise-Lab';
  selectedType : string;

  selected : string;
  
  // activeCondition = true
  // activefunc(){
  //   console.log('Working');
  //   this.activeCondition = !this.activeCondition
  // }
  activeVariable = true

 constructor() { }

  ngOnInit() {
    this.clickFunc();
    this.selectedType = 'loyalty';
    this.selected = 'loyalty'
  }
      clickFunc(){
        console.log('Working');
        this.activeVariable = !this.activeVariable;
      }
      navActive(type){
        this.selectedType = type;
        // console.log('Type', type);
        // this.ActiveCondition = !this.ActiveCondition;
      }

      clickFunc1(select){
        this.selected = select;
      }
}
