import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LISTA_MENUS_MOCK } from 'src/app/constants/menus-mock';
import { IMenu } from 'src/app/models/menu.model';


@Component({
  selector: 'ngf-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  listaMenu: IMenu[] = LISTA_MENUS_MOCK;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  salvar(): void {
    // logica
  }

  redirecionar(path: string) {
    this.route.navigateByUrl(path);
  }

}
