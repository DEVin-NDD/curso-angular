import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LISTA_BEBIDAS_MOCK } from 'src/app/constants/bebidas-mock';
import { IBebida } from 'src/app/models/bebida.model';
import { BebidaService } from 'src/app/services/bebida.service';

@Component({
  selector: 'ngf-bebida-lista',
  templateUrl: './bebida-lista.component.html',
  styleUrls: ['./bebida-lista.component.scss'],
})
export class BebidaListaComponent implements OnInit {
  listaBebida: IBebida[] = [];

  constructor(private bebidaService: BebidaService) {}

  ngOnInit(): void {
    console.log('ngOnInit');
    this.buscarBebidas();
  }

  buscarBebidas() {
    this.bebidaService
      .devolverBebidas()
      .subscribe((resposta: IBebida[]) => {
        this.listaBebida = resposta;
      });
  }

  adicionarBebidas() {
    const bebida = {
      id: this.listaBebida.length + 1,
      titulo: `BEBIDA ${this.listaBebida.length + 1}`,
      enderecoImagem:
        'https://imagensemoldes.com.br/wp-content/uploads/2020/10/Ilustracao-Cocktail-PNG-924x1024.png',
      descricao:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae necessitatibus, aut quo, sit temporibus, explicabo distinctio aperiam cupiditate incidunt suscipit quam corrupti? Fuga tempore rem incidunt, numquam vitae voluptates dolorem.',
      valor: 15.0,
    };

    this.bebidaService.adicionarBebida(bebida)
      .subscribe((resultado: IBebida) => {
        console.log('resultado ', resultado);
        this.listaBebida.push(resultado);
        // this.buscarBebidas();
      });
  }
}
