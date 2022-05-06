import { IBase } from "./base.model";

export interface IComida extends IBase {
  descricao: string;
  valor: number;
}
