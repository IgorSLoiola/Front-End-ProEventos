import { Evento } from './Evento';

export interface Lote {
  id: Number;
  nome: string;
  preco: Number;
  dataInicio: string;
  dataFim: string;
  // DataInicio?: Date;
  // DataFim?: Date;
  qauntidade: Number;
  eventoId: Number;
  eventos: Evento;
}
