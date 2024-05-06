import React from "react";

/**
 * Componente TableHeader - Cabeçalho da tabela
 * 
 * Este componente representa o cabeçalho da tabela, exibindo os títulos das colunas.
 * Ele também possui funcionalidade para lidar com cliques nas colunas para ordenação.
 * 
 * Props:
 * - header: Array contendo os títulos das colunas
 * - currentColumn: Índice da coluna atualmente selecionada
 * - handleClick: Função de callback para lidar com cliques nas colunas
 */
const TableHeader = ({ header, currentColumn, handleClick }) => {
  return (
    <thead onClick={handleClick}>
      <tr>
        {header.map((label, idx) => {
          const cellClass =
            idx !== 0 && idx !== currentColumn ? "hide-on-mobile" : "";
          return (
            <th className={`pm-th ${cellClass}`} key={idx}>
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHeader;
