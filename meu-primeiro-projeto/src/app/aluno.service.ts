import { Injectable } from '@angular/core';

export interface Aluno {
  nome: string;
  idade: number;
}


@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  aluno: Aluno[] = [];

  constructor() { }

  adicionarAluno(aluno: Aluno) {
    // lógica de inserção
    this.aluno.push(aluno);
  }
}
