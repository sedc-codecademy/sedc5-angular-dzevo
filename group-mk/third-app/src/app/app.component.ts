import { Component } from '@angular/core';
import { Router } from "@angular/router"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {

  constructor(private router: Router) {

  }

  menuItems: Array<string> = [
    "contact-list",
    "create-contact",
    "contact-details"
  ]

  navigateToRoute(routeKey: string): void {
    this.router.navigate([ routeKey ])
  }
}
