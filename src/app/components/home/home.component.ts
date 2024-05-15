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
  pessoas!: Pessoa[];

  displayedColumns: string[] = ['Nome', 'Gênero', 'Idade', 'Salário'];
  dataSource = new MatTableDataSource(this.pessoas);
}
