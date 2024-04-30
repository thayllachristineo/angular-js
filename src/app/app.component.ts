import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Bem-vindo ao treinamento de Angular';
  imgUrl =
    'https://miro.medium.com/v2/resize:fit:720/format:webp/1*DmU07T30U-l0aKYnGJQf-Q.png';

  /**
   * 4 tipos de data bindings
   * Interpolação: exibição de dados {{}}
   * Property bind: <img [src]="imgUrl" />
   * Event bind: <button (click)="onClick()">Clique aqui</button>
   * Two-way databind: <input [(ngModel)]="title" />
   */

  constructor() {
    // Construtor
    console.log('Construtor');
  }
}
