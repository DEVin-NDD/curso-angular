import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LISTA_COMIDAS_MOCK } from 'src/app/constants/comidas-mock';
import { IComida } from 'src/app/models/comida.model';
import { ComidaService } from 'src/app/services/comida.service';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'ngf-comida-lista',
  templateUrl: './comida-lista.component.html',
  styleUrls: ['./comida-lista.component.scss']
})
export class ComidaListaComponent implements OnInit {
  listaComida: IComida[] = [];

  constructor(
    private comidaService: ComidaService,
    private pedidoService: PedidoService
  ) {}

  ngOnInit(): void {
    this.comidaService.devolverComidas()
      .subscribe((resultado: IComida[]) => {
        this.listaComida = resultado;
      })
  }

  adicionarComida(comida: IComida) {
    this.pedidoService.adicionarItemPedido(comida);
  }

  adicionarComidaComQuantidade(itemComQuantidade: any) {
    this.pedidoService
      .adicionarItensPedido(itemComQuantidade.item, itemComQuantidade.quantidade);
  }
}
