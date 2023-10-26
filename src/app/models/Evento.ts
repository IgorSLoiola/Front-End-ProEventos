import { Lote } from './Lote';
import { Palestrante } from './Palestrante';
import { RedeSocial } from './RedeSocial';

export interface Evento {
  id: Number;
  local: string;
  dataEvento: string;
  // DataEvento? : Date;
  tema: string;
  quantidade: Number;
  lote: string;
  imagemURL: string;
  telefone: string;
  email: string;
  lotes: Lote[];
  redeSociais: RedeSocial[];
  palestranteEventos: Palestrante[];
}
