import { Component, Input, OnInit, Output } from '@angular/core';
import { IAluno } from 'src/app/models/aluno.model';

@Component({
  selector: 'app-item-aluno',
  templateUrl: './item-aluno.component.html',
  styleUrls: ['./item-aluno.component.scss']
})
export class ItemAlunoComponent implements OnInit {
  @Input()
  nome = '';

  @Input()
  idade = 0;

  @Input()
  nota = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
