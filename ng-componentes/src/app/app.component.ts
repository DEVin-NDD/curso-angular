import { Component, OnInit } from '@angular/core';
import { LISTA_ALUNOS } from './constants/constants';
import { IAluno } from './models/aluno.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit  {
  alunoIndividual = {
    nome: 'João da Silva',
    idade: 26,
    nota: 3,
  };

  configImage = {
    urlAngular: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png",
    altAngular: "Logo Angular",
    urlIonic: "",
    altIonic: "Logo Ionic",
    ehAppAngular: false
  }

  alunos: IAluno[] = [];

  desejaPersonalizar = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.alunos = LISTA_ALUNOS
    }, 4000)
  }

  verificarSeEstaReprovado(nota: number): boolean {
    return nota < 4;
  }

  buscarAlunos1(): IAluno[] {
    return [
      this.alunos[1]
    ];
  }

  buscarAlunos2(): IAluno[] {
    return [
      this.alunos[2]
    ];
  }

  salvar() {
    // ... implementa a lógica de salvar o recurso
    alert('Salvo com sucesso!')
  }

  cancelar() {
    // ... implementa a lógica de cancelar
    alert('Ação Cancelada!')
  }

  voltar() {
    // ... implementa a lógica de voltar
    alert('Cliquei no voltar!')
  }
}
