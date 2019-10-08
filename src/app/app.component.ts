import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'How much percentage of the world do you know?';

  constructor() { 
  }

  ngOnInit() {

  }

  handleClick(event: Event) {
    console.log("This should deselect all countries!", event);
  }
}
