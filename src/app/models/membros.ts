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

export class MembroAPIPhoto {
  id: string;
  name: string;
  photo: File;
  birthdate: string;
  allowance: number
}

// "status": true,
// "date": "2022-01-03T18:53:20.308Z",
// "data": [
//   {
//     "id": "61c33bf505f8080034006306",
//     "name": "Leticia Lima",
//     "photo": "460f35cc4239e94cf64635f7209938fb-1640184821119-212695775.jpeg",
//     "birthdate": "11/02/2004",
//     "allowance": 1000.5
//   }
// ]
// }

export type Membros = Membro[];
  