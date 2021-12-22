import { Atividade, ValorAtividade } from "./atividade";

export class Membro {
  id: string;
  postDate: Date;
  nome: string;
  dataNascimento: Date;
  valorMesada: number;
  foto: string;
}

export interface NovoMembro {
  foto: File;
  nome: string;
  dataNascimento: Date;
  valorMesada: number;
}

export interface MembroLista {
  foto: string;
  nome: string;
  dataNascimento: string;
  valorMesada: number;
}

export interface MembroFull {
  foto: string;
  nome: string;
  dataNascimento: string;
  valorMesada: number;
  atividades: Atividade[];
}

export interface MembroValor {
  foto: string;
  nome: string;
  valorMesada: number;
  valorDescontos: number;
  valorTotal:number;
  atividades: ValorAtividade[];
}

export type Membros = Membro[];
  