import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // esse serviço pode ser usado por qualquer componente
})
export class ProdutoService {
  readonly baseUrl = 'https://viacep.com.br/ws/01001000/json/';

  constructor(private http: HttpClient) {}

  getCidadePeloCep() {
    return this.http.get(this.baseUrl);
  }
}
