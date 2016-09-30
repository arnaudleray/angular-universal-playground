import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
  <p>Hello Angular Universal App</p>
  <router-outlet></router-outlet>
  `
})
export class App {

}

@Component({
  selector: 'home',
  template: `
    <div>
      <h1>Home</h1>
      
    </div>
  `
})
export class Home {
  public entries = ['ala'];
  addEntry () {
    this.entries.push('aaa')
  }
}
