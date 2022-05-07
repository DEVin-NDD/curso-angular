import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'ngf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  qtdeItemPedido = 0;

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
  }

  buscaTotalItem() {
    return this.pedidoService.buscarTotalItensPedido();
  }
}
