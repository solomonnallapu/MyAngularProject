import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Practise-Lab';

  constructor(
    private route : Router,
    
  ) {}

  ngOnInit() {

 
  }
      onClick(){
        this.route.navigate(['firms']);
      }
}

