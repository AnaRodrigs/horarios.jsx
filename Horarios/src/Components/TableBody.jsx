import React from "react";

/**
 * Componente TableBody - Corpo da tabela
 * 
 * Este componente representa o corpo da tabela, exibindo os dados das células.
 * Ele também possui funcionalidade para lidar com cliques nas células.
 * 
 * Props:
 * - data: Array bidimensional contendo os dados das células
 * - currentColumn: Índice da coluna atualmente selecionada
 * - onResetTable: Função de callback para lidar com cliques nas células
 */
const TableBody = ({ data, currentColumn, onResetTable }) => {
  return (
    <tbody>
      {data.map((row, rowIdx) => {
        return (
          <tr key={rowIdx} data-row={rowIdx}>
            {row.map((cell, colIdx) => {
              const cellClass =
                colIdx !== 0 && colIdx !== currentColumn
                  ? "hide-on-mobile"
                  : "";
              return (
                <td
                  className={`pm-td ${cellClass}`}
                  key={colIdx}
                  onClick={onResetTable}
                >
                  {cell}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
