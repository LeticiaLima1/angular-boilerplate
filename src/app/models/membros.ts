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

export class RespostaMembroAPI{
 status: boolean;
 date: Date;
 data: MembroAPI[];
}

export class MembroAPI {
  id: string;
  name: string;
  photo: string;
  birthdate: string;
  allowance: number
}

export class MembroValues extends MembroAPI{
  desconto: number;
  total: number;
}

export class MembroAPIPhoto {
  id: string;
  name: string;
  photo: File;
  birthdate: string;
  allowance: number
}

export type Membros = Membro[];
  