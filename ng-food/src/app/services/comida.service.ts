import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComida } from '../models/comida.model';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {
  constructor(private http: HttpClient) {}

  devolverComidas(): Observable<IComida[]> {
    return this.http.get<IComida[]>('http://localhost:3000/comidas');
  }
}
