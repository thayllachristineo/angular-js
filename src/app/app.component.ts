import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NewComponent } from './components/new/new.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    ToolbarComponent,
    NewComponent,
    HomeComponent,
  ],
})
export class AppComponent {
  constructor() {}
}
