import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from '../models/Evento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventoService {
  baseURL = 'https://localhost:5001/api/Eventos';

  constructor(private http: HttpClient) {}

  getEventos(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.baseURL);
  }

  getEventosByTema(tema: string): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.baseURL}/tema/${tema}`);
  }

  getEventoById(id: Number): Observable<Evento> {
    return this.http.get<Evento>(`${this.baseURL}/${id}`);
  }
}
