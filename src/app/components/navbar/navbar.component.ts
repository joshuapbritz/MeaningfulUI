import { routeState } from './../../global/state';
import { Component, OnInit } from '@angular/core';

enum States {
  HOME,
  INFO,
  SETTINGS,
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public isFollowed = false;

  public state: States;

  public get stateName(): string {
    if (this.state === 0 || !!this.state) {
      return States[this.state];
    }
    return null;
  }

  constructor() {}

  ngOnInit() {
    routeState.subscribe(url => {
      this.mapState(url);
      console.log(this.stateName);
    });
  }

  private mapState(url: string): void {
    switch (url) {
      case '/':
        this.state = States.HOME;
        break;

      case '/info':
        this.state = States.INFO;
        break;

      case '/settings':
        this.state = States.SETTINGS;
        break;
    }
  }
}
