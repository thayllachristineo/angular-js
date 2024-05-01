import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GeneroPipe } from '../../pipes/genero.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GeneroPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  pessoas = [
    { nome: 'Thaylla', genero: 'F', idade: 31, salario: '1000' },
    { nome: 'Cesar', genero: 'M', idade: 26, salario: '2000' },
    { nome: 'Giovanna', genero: 'F', idade: 29, salario: '3000' },
    { nome: 'Marinalva', genero: 'F', idade: 68, salario: '4000' },
  ];
}
