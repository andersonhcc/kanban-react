import { ListModel } from "../../domain/models";

export function fetchData(): ListModel[] {
  return [
    {
      nameCard: 'Tasks',
      data: [
        {
          id: 1,
          nomeTarefa: 'Desenvolver funcionalidade de login',
          dataExecucao: '15/08/2023',
          localExecucao: 'Ambiente de desenvolvimento',
          prioridade: 'alta',
          colorLabel:"orange",
          user:{
            name: "Anderson Henrique",
            avatarUser: "https://ui-avatars.com/api/?background=random&name=Anderson",

          },
          descricao: 'Nesta tarefa, você deve implementar o fluxo completo de autenticação e autorização, garantindo que os usuários possam acessar a plataforma com segurança. Isso inclui a criação de páginas de login e registro, a validação de credenciais, o gerenciamento de sessões e o controle de permissões. Certifique-se de utilizar bibliotecas de autenticação confiáveis e seguir as melhores práticas de segurança para proteger as credenciais dos usuários. Qualquer problema relacionado à segurança deve ser tratado com prioridade máxima. Esta tarefa foi atribuída pelo Gerente de Projeto como parte das metas de lançamento da próxima versão.',
          atribuidoPor: 'Gerente de Projeto',
          dicasResolucao: 'Certifique-se de usar uma abordagem à prova de falhas para manipular senhas e tokens de autenticação. Faça uso de bibliotecas bem estabelecidas e evite implementações caseiras de segurança.',
        },
        {
          id: 2,
          colorLabel:"green",
          nomeTarefa: 'Otimizar consulta de banco de dados',
          dataExecucao: '16/08/2023',
          user:{
            name: "Henrique",
            avatarUser: "https://ui-avatars.com/api/?background=random&name=Henrique",

          },
          localExecucao: 'Ambiente de testes',
          prioridade: 'baixa',
          descricao: 'Nesta tarefa, é essencial identificar e resolver gargalos de desempenho na consulta de banco de dados para aprimorar a velocidade e eficiência do sistema. Realize uma análise profunda das consultas frequentemente executadas e identifique oportunidades de otimização, como adição de índices, ajuste de consultas, uso adequado de joins e seleção de colunas. Considere também o uso de cache de consulta para reduzir a carga no banco de dados. Esta tarefa foi atribuída pela Equipe de Desenvolvimento para garantir um sistema mais responsivo e eficiente.',
          atribuidoPor: 'Equipe de Desenvolvimento',
          dicasResolucao: 'Use ferramentas de análise de desempenho de banco de dados para identificar as consultas mais lentas. Certifique-se de criar índices nas colunas apropriadas e evite consultas complexas sempre que possível.',
        },
        {
          id: 3,
          colorLabel:"green",
          nomeTarefa: 'Revisar código do colega',
          user:{
            name: "Costa",
            avatarUser: "https://ui-avatars.com/api/?background=random&name=Costa",

          },
          dataExecucao: '17/08/2023',
          localExecucao: 'Plataforma de revisão de código',
          
          prioridade: 'baixa',
          descricao: 'Nesta tarefa, você deve realizar uma revisão detalhada do código-fonte fornecido pelo seu colega. Sua análise deve ser criteriosa, destacando tanto os pontos fortes do código quanto as oportunidades de melhoria. Forneça feedback construtivo e específico para orientar o colega na criação de um código de alta qualidade e consistente. Esta tarefa foi atribuída pelo Líder Técnico como parte do processo contínuo de aprimoramento da equipe e do compartilhamento de conhecimento.',
          atribuidoPor: 'Líder Técnico',
          dicasResolucao: 'Ao revisar o código, não se limite a encontrar erros. Valorize as práticas positivas, como modularidade, legibilidade e boas convenções de nomenclatura. Fornecer exemplos concretos ajudará o colega a entender e aplicar o feedback.',
        },
        {
          id: 12,
          nomeTarefa: 'Desenvolver funcionalidade de login',
          dataExecucao: '15/08/2023',
          localExecucao: 'Ambiente de desenvolvimento',
          prioridade: 'alta',
          colorLabel: "orange",
          user: {
            name: "Anderson Henrique",
            avatarUser: "https://ui-avatars.com/api/?background=random&name=Anderson",
          },
          descricao: 'Nesta tarefa, você deve implementar o fluxo completo de autenticação e autorização, garantindo que os usuários possam acessar a plataforma com segurança...',
          atribuidoPor: 'Gerente de Projeto',
          dicasResolucao: 'Certifique-se de usar uma abordagem à prova de falhas para manipular senhas e tokens de autenticação...',
        },
        {
          id: 32,
          colorLabel: "green",
          nomeTarefa: 'Otimizar consulta de banco de dados',
          dataExecucao: '16/08/2023',
          user: {
            name: "Henrique",
            avatarUser: "https://ui-avatars.com/api/?background=random&name=Henrique",
          },
          localExecucao: 'Ambiente de testes',
          prioridade: 'baixa',
          descricao: 'Nesta tarefa, é essencial identificar e resolver gargalos de desempenho na consulta de banco de dados...',
          atribuidoPor: 'Equipe de Desenvolvimento',
          dicasResolucao: 'Use ferramentas de análise de desempenho de banco de dados para identificar as consultas mais lentas...',
        },
        {
          id: 35,
          colorLabel: "green",
          nomeTarefa: 'Revisar código do colega',
          user: {
            name: "Costa",
            avatarUser: "https://ui-avatars.com/api/?background=random&name=Costa",
          },
          dataExecucao: '17/08/2023',
          localExecucao: 'Plataforma de revisão de código',
          prioridade: 'baixa',
          descricao: 'Nesta tarefa, você deve realizar uma revisão detalhada do código-fonte fornecido pelo seu colega...',
          atribuidoPor: 'Líder Técnico',
          dicasResolucao: 'Ao revisar o código, não se limite a encontrar erros. Valorize as práticas positivas...',
        },


      ]
    },
    {
      nameCard: 'Doing',
      data: [
        {
          id: 10,
          colorLabel: "red",
          nomeTarefa: 'Funcionalidade de notificações',
          user:{
            name: "Sousa",
            avatarUser: "https://ui-avatars.com/api/?background=random&name=Sousa",

          },
          dataExecucao: '18/08/2023',
          localExecucao: 'Ambiente de desenvolvimento',
          prioridade: 'alta',
          descricao: 'Nesta tarefa, você deve implementar a funcionalidade de notificações no sistema, permitindo que os usuários recebam alertas sobre eventos importantes. Isso inclui a criação de interfaces de usuário para gerenciar preferências de notificação, a integração com serviços de envio de notificações e a exibição de alertas no aplicativo. Certifique-se de seguir as melhores práticas de design de interface e otimizar o desempenho da exibição de notificações. Esta tarefa foi atribuída pelo Gerente de Produto para aprimorar a experiência do usuário.',
          atribuidoPor: 'Gerente de Produto',
          dicasResolucao: 'Ao implementar as notificações, considere a privacidade do usuário e forneça opções claras para controlar o recebimento de alertas. Mantenha a consistência visual com o restante do aplicativo.',
        },
        {
          id: 11,
          colorLabel: "red",
          nomeTarefa: 'Melhorar a escalabilidade do sistema',
          user:{
            name: "Bernado",
            avatarUser: "https://ui-avatars.com/api/?background=random&name=Bernado",

          },
          dataExecucao: '19/08/2023',
          localExecucao: 'Ambiente de testes',
          prioridade: 'alta',
          descricao: 'Nesta tarefa, é fundamental analisar a arquitetura do sistema e implementar melhorias para garantir sua escalabilidade. Avalie os componentes do sistema que podem se tornar gargalos à medida que o número de usuários aumenta. Considere a introdução de balanceamento de carga, uso de caches distribuídos e otimização de consultas de banco de dados. Esta tarefa foi atribuída pela Equipe de Desenvolvimento para preparar o sistema para futuras demandas.',
          atribuidoPor: 'Equipe de Desenvolvimento',
          dicasResolucao: 'Use ferramentas de monitoramento de desempenho para identificar pontos fracos na escalabilidade. Introduza soluções como balanceadores de carga para distribuir o tráfego de maneira uniforme.',
        },
        {
          id: 12,
          colorLabel: "green",
          nomeTarefa: 'Realizar testes de integração contínua',
          user:{
            name: "Jhon",
            avatarUser: "https://ui-avatars.com/api/?background=random&name=Jhon",

          },
          dataExecucao: '20/08/2023',
          localExecucao: 'Ambiente de teste automatizado',
          prioridade: 'baixa',
          descricao: 'Nesta tarefa, você deve criar e executar testes de integração contínua para garantir que as diversas partes do sistema funcionem bem juntas. Isso inclui testes de APIs, integração entre módulos e fluxos completos de funcionalidades. Utilize ferramentas de automação de testes e frameworks para agilizar o processo de teste. Os resultados dos testes devem ser detalhados e facilmente compreensíveis. Esta tarefa foi atribuída pelo Líder de Qualidade para manter a estabilidade do sistema.',
          atribuidoPor: 'Líder de Qualidade',
          dicasResolucao: 'Automatize os testes de integração usando ferramentas como Selenium ou Cypress. Certifique-se de que os testes sejam repetíveis e abranjam os cenários mais críticos.',
        },
        {
          id: 22,
          colorLabel: "red",
          nomeTarefa: 'Funcionalidade de notificações',
          user:{
            name: "Sousa",
            avatarUser: "https://ui-avatars.com/api/?background=random&name=Sousa",

          },
          dataExecucao: '18/08/2023',
          localExecucao: 'Ambiente de desenvolvimento',
          prioridade: 'alta',
          descricao: 'Nesta tarefa, você deve implementar a funcionalidade de notificações no sistema, permitindo que os usuários recebam alertas sobre eventos importantes. Isso inclui a criação de interfaces de usuário para gerenciar preferências de notificação, a integração com serviços de envio de notificações e a exibição de alertas no aplicativo. Certifique-se de seguir as melhores práticas de design de interface e otimizar o desempenho da exibição de notificações. Esta tarefa foi atribuída pelo Gerente de Produto para aprimorar a experiência do usuário.',
          atribuidoPor: 'Gerente de Produto',
          dicasResolucao: 'Ao implementar as notificações, considere a privacidade do usuário e forneça opções claras para controlar o recebimento de alertas. Mantenha a consistência visual com o restante do aplicativo.',
        },
        {
          id: 33,
          colorLabel: "red",
          nomeTarefa: 'Melhorar a escalabilidade do sistema',
          user:{
            name: "Bernado",
            avatarUser: "https://ui-avatars.com/api/?background=random&name=Bernado",

          },
          dataExecucao: '19/08/2023',
          localExecucao: 'Ambiente de testes',
          prioridade: 'alta',
          descricao: 'Nesta tarefa, é fundamental analisar a arquitetura do sistema e implementar melhorias para garantir sua escalabilidade. Avalie os componentes do sistema que podem se tornar gargalos à medida que o número de usuários aumenta. Considere a introdução de balanceamento de carga, uso de caches distribuídos e otimização de consultas de banco de dados. Esta tarefa foi atribuída pela Equipe de Desenvolvimento para preparar o sistema para futuras demandas.',
          atribuidoPor: 'Equipe de Desenvolvimento',
          dicasResolucao: 'Use ferramentas de monitoramento de desempenho para identificar pontos fracos na escalabilidade. Introduza soluções como balanceadores de carga para distribuir o tráfego de maneira uniforme.',
        },
        {
          id: 55,
          colorLabel: "green",
          nomeTarefa: 'Realizar testes de integração contínua',
          user:{
            name: "Jhon",
            avatarUser: "https://ui-avatars.com/api/?background=random&name=Jhon",

          },
          dataExecucao: '20/08/2023',
          localExecucao: 'Ambiente de teste automatizado',
          prioridade: 'baixa',
          descricao: 'Nesta tarefa, você deve criar e executar testes de integração contínua para garantir que as diversas partes do sistema funcionem bem juntas. Isso inclui testes de APIs, integração entre módulos e fluxos completos de funcionalidades. Utilize ferramentas de automação de testes e frameworks para agilizar o processo de teste. Os resultados dos testes devem ser detalhados e facilmente compreensíveis. Esta tarefa foi atribuída pelo Líder de Qualidade para manter a estabilidade do sistema.',
          atribuidoPor: 'Líder de Qualidade',
          dicasResolucao: 'Automatize os testes de integração usando ferramentas como Selenium ou Cypress. Certifique-se de que os testes sejam repetíveis e abranjam os cenários mais críticos.',
        },
      ]
    },
    {
      nameCard: 'Done',
      data: [
        {
          id: 7,
          colorLabel:"orange",
          nomeTarefa: 'Desenvolver funcionalidade de login',
          user:{
            name: "Anderson",
            avatarUser: "https://ui-avatars.com/api/?background=random&name=Anderson",

          },
          dataExecucao: '15/08/2023',
          localExecucao: 'Ambiente de desenvolvimento',
          prioridade: 'alta',
          descricao: 'Nesta tarefa, você deve implementar o fluxo completo de autenticação e autorização, garantindo que os usuários possam acessar a plataforma com segurança. Isso inclui a criação de páginas de login e registro, a validação de credenciais, o gerenciamento de sessões e o controle de permissões. Certifique-se de utilizar bibliotecas de autenticação confiáveis e seguir as melhores práticas de segurança para proteger as credenciais dos usuários. Qualquer problema relacionado à segurança deve ser tratado com prioridade máxima. Esta tarefa foi atribuída pelo Gerente de Projeto como parte das metas de lançamento da próxima versão.',
          atribuidoPor: 'Gerente de Projeto',
          dicasResolucao: 'Certifique-se de usar uma abordagem à prova de falhas para manipular senhas e tokens de autenticação. Faça uso de bibliotecas bem estabelecidas e evite implementações caseiras de segurança.',
        },
        {
          id: 8,
          colorLabel:"red",
          nomeTarefa: 'Otimizar consulta de banco de dados',
          user:{
            name: "Anderson",
            avatarUser: "https://ui-avatars.com/api/?background=random&name=Anderson",

          },
          dataExecucao: '16/08/2023',
          localExecucao: 'Ambiente de testes',
          prioridade: 'crítica',
          descricao: 'Nesta tarefa, é essencial identificar e resolver gargalos de desempenho na consulta de banco de dados para aprimorar a velocidade e eficiência do sistema. Realize uma análise profunda das consultas frequentemente executadas e identifique oportunidades de otimização, como adição de índices, ajuste de consultas, uso adequado de joins e seleção de colunas. Considere também o uso de cache de consulta para reduzir a carga no banco de dados. Esta tarefa foi atribuída pela Equipe de Desenvolvimento para garantir um sistema mais responsivo e eficiente.',
          atribuidoPor: 'Equipe de Desenvolvimento',
          dicasResolucao: 'Use ferramentas de análise de desempenho de banco de dados para identificar as consultas mais lentas. Certifique-se de criar índices nas colunas apropriadas e evite consultas complexas sempre que possível.',
        },
        {
          id: 9,
          colorLabel:"green",
          nomeTarefa: 'Revisar código do colega',
          dataExecucao: '17/08/2023',
          localExecucao: 'Plataforma de revisão de código',
          user:{
            name: "Jhon",
            avatarUser: "https://ui-avatars.com/api/?background=random&name=Jhon",

          },
          prioridade: 'baixa',
          descricao: 'Nesta tarefa, você deve realizar uma revisão detalhada do código-fonte fornecido pelo seu colega. Sua análise deve ser criteriosa, destacando tanto os pontos fortes do código quanto as oportunidades de melhoria. Forneça feedback construtivo e específico para orientar o colega na criação de um código de alta qualidade e consistente. Esta tarefa foi atribuída pelo Líder Técnico como parte do processo contínuo de aprimoramento da equipe e do compartilhamento de conhecimento.',
          atribuidoPor: 'Líder Técnico',
          dicasResolucao: 'Ao revisar o código, não se limite a encontrar erros. Valorize as práticas positivas, como modularidade, legibilidade e boas convenções de nomenclatura. Fornecer exemplos concretos ajudará o colega a entender e aplicar o feedback.',
        },
        {
          id: 16,
          user:{
            name: "Jhon",
            avatarUser: "https://ui-avatars.com/api/?background=random&name=Jhon",

          },
          colorLabel: "orange",
          nomeTarefa: 'Funcionalidade de compartilhamento',
          dataExecucao: '21/08/2023',
          localExecucao: 'Ambiente de desenvolvimento',
          prioridade: 'alta',
          descricao: 'Nesta tarefa, a funcionalidade de compartilhamento foi implementada com sucesso no sistema. Agora os usuários podem compartilhar conteúdo com facilidade através de redes sociais e e-mails. Foram seguidas as diretrizes de design e usabilidade para garantir que a funcionalidade seja intuitiva e eficaz. Esta tarefa foi atribuída pelo Gerente de Produto para melhorar a divulgação do conteúdo da plataforma.',
          atribuidoPor: 'Gerente de Produto',
          dicasResolucao: 'Ao implementar o compartilhamento, certifique-se de que as informações compartilhadas sejam precisas e relevantes. Teste a funcionalidade em diferentes plataformas para garantir a consistência da experiência do usuário.',
        },
        {
          id: 17,
          user:{
            name: "Henrique",
            avatarUser: "https://ui-avatars.com/api/?background=random&name=Henrique",
          },
          colorLabel: "orange",
          nomeTarefa: 'Realizar testes de segurança',
          dataExecucao: '22/08/2023',
          localExecucao: 'Ambiente de teste de segurança',
          prioridade: 'alta',
          descricao: 'Nesta tarefa, uma bateria abrangente de testes de segurança foi realizada no sistema. Foram exploradas vulnerabilidades comuns, como injeção de SQL, cross-site scripting (XSS) e autenticação inadequada. As vulnerabilidades identificadas foram tratadas e corrigidas. Esta tarefa foi realizada pela Equipe de Segurança para garantir a robustez do sistema.',
          atribuidoPor: 'Equipe de Segurança',
          dicasResolucao: 'Ao realizar testes de segurança, pense como um invasor e explore possíveis pontos fracos no sistema. Corrija qualquer vulnerabilidade identificada antes de lançar o sistema em produção.',
        },
        {
          id: 18,
          user:{
            name: "Anderson",
            avatarUser: "https://ui-avatars.com/api/?background=random&name=Anderson",

          },
          colorLabel: "green",
          nomeTarefa: 'Finalizar documentação do projeto',
          dataExecucao: '23/08/2023',
          localExecucao: 'Ambiente de documentação',
          prioridade: 'baixa',
          descricao: 'Nesta tarefa, a documentação completa do projeto foi finalizada. Isso inclui a documentação técnica, guias de uso, instruções de instalação e outros recursos relevantes. A documentação foi organizada e formatada de maneira clara para facilitar o entendimento por parte dos desenvolvedores e usuários. Esta tarefa foi atribuída pelo Gerente de Projeto para garantir que o conhecimento do projeto seja bem registrado.',
          atribuidoPor: 'Gerente de Projeto',
          dicasResolucao: 'Ao finalizar a documentação, verifique se todas as partes essenciais do projeto estão cobertas. Inclua exemplos e capturas de tela sempre que possível para facilitar a compreensão.',
        },
      ]
    },
    
  ];
}

