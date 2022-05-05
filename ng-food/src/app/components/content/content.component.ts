import { Component, OnInit } from '@angular/core';
import { LISTA_MENUS_MOCK } from 'src/app/constants/menus-mock';
import { IMenu } from 'src/app/models/menu.model';



@Component({
  selector: 'ngf-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  listaMenu: IMenu[] = LISTA_MENUS_MOCK;

  constructor() { }

  ngOnInit(): void {
  }

  salvar() {
    // logica
  }

  ouvirCliqueDoBotao(titulo: string) {
    alert('Cliquei no ' + titulo);
  }

}
