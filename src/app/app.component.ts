import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Olá';

  pessoas = [
    { nome: 'Thaylla', genero: 'Mulher Cis', idade: 31, salario: '1000' },
    { nome: 'Cesar', genero: 'Homem Cis', idade: 26, salario: '2000' },
    { nome: 'Giovanna', genero: 'Mulher Cis', idade: 29, salario: '3000' },
    { nome: 'Marinalva', genero: 'Mulher Cis', idade: 68, salario: '4000' },
  ];

  constructor() {}
}
