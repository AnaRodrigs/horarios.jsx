import React from "react";

/**
 * Componente RoomDropdown - Dropdown para seleção de sala
 * 
 * Este componente exibe um dropdown com opções de salas e permite
 * selecionar uma sala específica.
 * 
 * Props:
 * - selectedRoom: Sala atualmente selecionada
 * - handleRoomSelectionChange: Função de callback para lidar com a mudança de sala
 */
const RoomDropdown = ({ selectedRoom, handleRoomSelectionChange }) => {
  const roomOptions = [
    "Todas as Salas",
    "Sala 1",
    "Sala 2",
    "Sala 3",
    "Sala 4",
    "Sala 5",
    "Sala 6",
    "Sala 7",
    "Sala 8",
    "Sala 9",
    "Sala 10",
    "Sala 11",
    "Sala 12",
  ];

  return (
    <div className="room-dropdown">
      <select
        value={selectedRoom}
        onChange={handleRoomSelectionChange}
      >
        {roomOptions.map((room, index) => (
          <option key={index} value={room}>
            {room}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RoomDropdown;
