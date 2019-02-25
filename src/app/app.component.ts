import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Practise-Lab';
  
  activeCondition = true
  activefunc(){
    console.log('Working');
    this.activeCondition = !this.activeCondition
  }
}
