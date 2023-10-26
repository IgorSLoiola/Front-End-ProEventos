import { Evento } from './Evento';
import { Palestrante } from './Palestrante';

export interface RedeSocial {
  id: Number;
  nome: string;
  URL: string;
  eventoId?: Number;
  //   eventos: Evento;
  palestranteId?: Number;
  //   palestrantes: Palestrante;
}
