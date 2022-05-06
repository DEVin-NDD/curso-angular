import { Injectable } from '@angular/core';
import {INotificacao} from "../models/notificacao.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {
  urlBase = 'http://localhost:3000/notificacoes';

  constructor(private http: HttpClient) { }

  getNotificacoes(): Observable<INotificacao[]> {
    return this.http
      .get<INotificacao[]>(this.urlBase)
  }

  adicionarNotificacao() {
    const notificacao = {
      id: 6,
      aplicativo: 'LINKEDIN',
      titulo: 'Teste',
      descricao: 'teste',
      tempoPublicacao: '10m',
      imagem: 'assets/linkedin.png'
    };

    return this.http.post<INotificacao>(this.urlBase, notificacao);
  }
}
