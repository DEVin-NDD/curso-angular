import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  alunoIndividual = {
    nome: 'João da Silva',
    idade: 26,
    nota: 3,
  };

  alunos = [
    {
      nome: 'João da Silva',
      idade: 26,
      nota: 10,
    },
    {
      nome: 'Maria',
      idade: 26,
      nota: 6,
    },
    {
      nome: 'Joaquim',
      idade: 26,
      nota: 2,
    },
  ];
}
