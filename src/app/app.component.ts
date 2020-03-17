import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
  // templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  simple = 'Test';
  title = 'sample';

  ngOnInit(): void {
    // Here we can set intializations for oue component
    this.simple = 'Welcome to our sample';
  }
}
