import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { GeneroPipe } from '../../pipes/genero.pipe';

export interface Pessoa {
  nome: string;
  genero: string;
  idade: number;
  salario: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GeneroPipe, MatTableModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  pessoas: Pessoa[] = [
    { nome: 'Thaylla', genero: 'F', idade: 31, salario: '1000' },
    { nome: 'Cesar', genero: 'M', idade: 26, salario: '2000' },
    { nome: 'Giovanna', genero: 'F', idade: 29, salario: '3000' },
    { nome: 'Marinalva', genero: 'F', idade: 68, salario: '4000' },
  ];

  displayedColumns: string[] = ['Nome', 'Gênero', 'Idade', 'Salário'];
  dataSource = new MatTableDataSource(this.pessoas);
}
