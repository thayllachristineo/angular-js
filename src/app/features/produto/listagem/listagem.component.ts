import { Component } from '@angular/core';

import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css',
})
export class ListagemComponent {
  // products$ = this.produtoService.getCidadePeloCep();

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    console.log('dashudhs');
    this.produtoService.getCidadePeloCep().subscribe((r) => console.log(r));
  }
}
