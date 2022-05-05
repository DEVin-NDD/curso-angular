import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.scss']
})
export class BaseButtonComponent {

  @Input() titulo?: string;

  @Input() classeCor = '';

  @Output() cliqueDoBotao = new EventEmitter();

  constructor() { }

  clicarBotao() {
    this.cliqueDoBotao.emit();
  }
}
