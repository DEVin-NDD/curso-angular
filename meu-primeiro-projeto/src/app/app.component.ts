import { Component } from '@angular/core';
import { Aluno, AlunoService } from './aluno.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private alunoService: AlunoService) {}

  adicionarAluno() {
    const aluno: Aluno = {
      nome: 'Rivaldo',
      idade: 24,
    };

    this.alunoService.adicionarAluno(aluno);
  }
}
