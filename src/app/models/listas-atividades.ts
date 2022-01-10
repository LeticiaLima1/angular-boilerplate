export interface ListaAtividadesResposta{
  status: boolean;
  date: Date;
  data: Atividades;
}

export interface Atividades{
  id: string;
  status: boolean;
  memberId: string;
  tasks: Task[];
}

export interface Task{
  id: string;
  missed: boolean;
  value: number;
  description: string;
}