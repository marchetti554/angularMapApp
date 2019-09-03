import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Top 10 No-Anime Heroes';
  marvelSubtitle = 'Marvel Heroes';
  dcSubtitle = 'DC Heroes';
}
