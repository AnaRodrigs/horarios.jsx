# Calendário de Horários de Laboratórios
    Este projeto consiste em uma aplicação web desenvolvida em React.js para visualização de um calendário de horários de laboratórios. A aplicação permite aos usuários visualizar os horários das aulas em diferentes salas de laboratório ao longo dos dias úteis da semana.

## Funcionalidades
    Ordenação de Colunas: Os usuários podem clicar nos cabeçalhos das colunas para ordenar os dados da tabela com base na coluna selecionada.
    
    Navegação de Colunas: Os usuários podem navegar pelas colunas da tabela usando os botões "Anterior" e "Próximo".
    
    Pesquisa de Dados: Os usuários podem pesquisar por dados específicos na tabela usando um campo de pesquisa.
    
    Filtragem por Sala: Os usuários podem filtrar os dados da tabela para exibir apenas os horários de uma sala específica selecionada no menu suspenso.

## Componentes
### PMTable:
    Este componente principal é responsável por renderizar a tabela de horários de laboratório.
        Ele recebe as seguintes props:
            title: Título da tabela.
            header: Array contendo os cabeçalhos das colunas da tabela.
            data: Array bidimensional com os dados das células da tabela.
        O PMTable também possui métodos para ordenar os dados da tabela e lidar com interações do usuário, como cliques em colunas e seleção de salas.

### TableHeader:
    Este componente renderiza o cabeçalho da tabela, exibindo os títulos das colunas.
        Recebe as seguintes props:
            header: Array com os cabeçalhos das colunas.
            currentColumn: Índice da coluna atualmente selecionada.
            handleClick: Função de callback para lidar com cliques nas colunas.

### TableBody:
    Este componente renderiza o corpo da tabela, exibindo os dados das células.
        Recebe as seguintes props:
            data: Array bidimensional com os dados das células da tabela.
            currentColumn: Índice da coluna atualmente selecionada.
            onResetTable: Função de callback para lidar com cliques nas células.
### RoomDropdown:
    Este componente renderiza um menu suspenso para selecionar uma sala específica.
        Recebe as seguintes props:
            selectedRoom: A sala selecionada atualmente.
            handleRoomSelectionChange: Função de callback para lidar com alterações na seleção da sala.

## Uso
    Para usar o projeto, siga estas etapas:
    Instale as dependências usando - npm install & npm install vite
    Inicie o servidor local usando - npm install json-server & json-server --name.json