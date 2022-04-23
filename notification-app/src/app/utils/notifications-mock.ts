import { INotificacao } from "../models/notificacao.model";

export const NOTIFICATIONS_MOCK: INotificacao[] = [
    {
      aplicativo: 'IFOOD',
      titulo: 'Olha a chuva!',
      descricao: 'A chuva chegou! E seu almoço pode chegar em alguns cliques',
      tempoPublicacao: 'Agora',
      imagem: 'assets/ifood.png'
    },
    {
      aplicativo: 'MAGALU',
      titulo: 'Tá ROLANDO, VEM!',
      descricao: 'A black das blacks é só no Magalu! Toca aqui pra ver as MELHORES OFERTAS',
      tempoPublicacao: '5m',
      imagem: 'assets/magalu.png'
    },
    {
      aplicativo: 'AMAZON',
      titulo: '20% OFF',
      descricao: 'Aproveite 20% off na sua primeira compra. Desconto valido por 24horas',
      tempoPublicacao: '1h',
      imagem: 'assets/amazon.png'
    },
    {
      aplicativo: 'LINKEDIN',
      titulo: 'Notificações não visualizadas',
      descricao: 'Veja atualizações do Linkedin que você pode ter perdido',
      tempoPublicacao: 'Agora',
      imagem: 'assets/linkedin.png'
    },
  ]