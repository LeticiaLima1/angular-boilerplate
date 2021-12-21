export interface Membro {
  id: string;
  postDate: Date;
  nome: string;
  dataNascimento: Date;
  valorMesada: number;
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

export type Membros = Membro[];
  