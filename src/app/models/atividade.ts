export interface Atividade {
  id: string;
  description: string
}
  

export interface AtividadeResposta{
  status: boolean;
  date: Date;
  data: Atividade[];
}