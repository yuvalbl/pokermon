import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
    `

      <h1 class="title">Pokermons</h1>
      <nav>
        <a [routerLink]="['/home']">Home</a>
        <a [routerLink]="['/pokermons']">Pokermons</a>
      </nav>

    <router-outlet></router-outlet>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
