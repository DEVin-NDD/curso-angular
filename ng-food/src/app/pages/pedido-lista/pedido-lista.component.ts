import { Component, OnChanges, OnInit } from '@angular/core';
import { IBebida } from 'src/app/models/bebida.model';
import { IComida } from 'src/app/models/comida.model';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'ngf-pedido-lista',
  templateUrl: './pedido-lista.component.html',
  styleUrls: ['./pedido-lista.component.scss']
})
export class PedidoListaComponent implements OnInit {
  listaItensPedido: IComida[] | IBebida[] = [];

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.buscarItensPedido();
  }

  buscarItensPedido() {
    this.listaItensPedido = this.pedidoService.buscarItensPedido();
  }

  removerItem(item: IComida | IBebida) {
    this.pedidoService.removerItemPedido(item.id);
    this.buscarItensPedido();
  }

  removerTudo() {
    this.pedidoService.limparPedido();
    this.buscarItensPedido();
  }
}
