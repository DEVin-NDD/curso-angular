import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LISTA_COMIDAS_MOCK } from 'src/app/constants/comidas-mock';
import { IComida } from 'src/app/models/comida.model';

@Component({
  selector: 'ngf-comida-lista',
  templateUrl: './comida-lista.component.html',
  styleUrls: ['./comida-lista.component.scss']
})
export class ComidaListaComponent implements OnInit {
  listaComida: IComida[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<IComida[]>('http://localhost:3000/comidas')
      .subscribe((value: IComida[]) => {
        this.listaComida = value;
      });
  }

}
