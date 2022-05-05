import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemAlunoComponent } from './components/item-aluno/item-aluno.component';
import { BaseButtonComponent } from './components/base-button/base-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemAlunoComponent,
    BaseButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
