import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBebida } from '../models/bebida.model';

@Injectable({
  providedIn: 'root',
})
export class BebidaService {
  constructor(private http: HttpClient) {}

  devolverBebidas(): Observable<IBebida[]> {
    return this.http.get<IBebida[]>('http://localhost:3000/bebidas');
  }
}
