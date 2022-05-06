import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBebida } from '../models/bebida.model';

@Injectable({
  providedIn: 'root',
})
export class BebidaService {
  bebidas: IBebida[] = [
    {
      id: 1,
      titulo: 'BEBIDA 1',
      enderecoImagem:
        'https://imagensemoldes.com.br/wp-content/uploads/2020/10/Ilustracao-Cocktail-PNG-924x1024.png',
      descricao:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae necessitatibus, aut quo, sit temporibus, explicabo distinctio aperiam cupiditate incidunt suscipit quam corrupti? Fuga tempore rem incidunt, numquam vitae voluptates dolorem.',
      valor: 10.0,
    },
    {
      id: 2,
      titulo: 'BEBIDA 2',
      enderecoImagem:
        'https://imagensemoldes.com.br/wp-content/uploads/2020/10/Ilustracao-Cocktail-PNG-924x1024.png',
      descricao:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae necessitatibus, aut quo, sit temporibus, explicabo distinctio aperiam cupiditate incidunt suscipit quam corrupti? Fuga tempore rem incidunt, numquam vitae voluptates dolorem.',
      valor: 14.0,
    },
  ];

  constructor(private http: HttpClient) {}

  getBebidas() {
    return this.bebidas;
  }

  devolverBebidas(): Observable<IBebida[]> {
    return this.http.get<IBebida[]>('http://localhost:3000/bebidas');
  }

  adicionarBebida(bebida: IBebida): Observable<IBebida> {
    return this.http
    .post<IBebida>('http://localhost:3000/bebidas', bebida);
  }
}
