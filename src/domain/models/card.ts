export type CardModel = {
  id: number;
  user: {
    name: string;
    avatarUser: string;
  }
  nomeTarefa: string;
  dataExecucao: string;
  colorLabel: string;
  descricao: string;
  atribuidoPor: string;
  dicasResolucao: string;
  localExecucao: string;
  prioridade: string;
};