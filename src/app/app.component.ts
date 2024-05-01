import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GeneroPipe } from './pipes/genero.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, GeneroPipe],
})
export class AppComponent {
  title = 'Olá';

  pessoas = [
    { nome: 'Thaylla', genero: 'F', idade: 31, salario: '1000' },
    { nome: 'Cesar', genero: 'M', idade: 26, salario: '2000' },
    { nome: 'Giovanna', genero: 'F', idade: 29, salario: '3000' },
    { nome: 'Marinalva', genero: 'F', idade: 68, salario: '4000' },
  ];

  constructor() {}
}
