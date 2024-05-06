import React, { Component } from "react";
import PropTypes from "prop-types";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import RoomDropdown from "./RoomDropdown";
import "./PMStyle.css";

/**
 * Componente PMTable - Tabela de Horário de Laboratórios
 * 
 * Este componente exibe uma tabela de horários de laboratórios, 
 * permitindo ordenação, filtro por sala e busca por nome.
 * 
 * Props:
 * - title: Título da tabela
 * - header: Array com os nomes das colunas
 * - data: Array com os dados da tabela
 */
class PMTable extends Component {
  constructor(props) {
    super();

    this.state = {
      title: props.title,
      header: props.header,
      data: props.data,
      sortBy: null,
      descending: false,
      error: null,
      currentColumn: 0,
      searchQuery: "",
      filteredData: props.data,
      selectedRoom: "Todas as Salas",
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleNextColumn = this.handleNextColumn.bind(this);
    this.handlePreviousColumn = this.handlePreviousColumn.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleRoomSelectionChange = this.handleRoomSelectionChange.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:3000/Calendario")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          title: json.title,
          header: json.header,
          data: json.data,
          filteredData: json.data,
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          error: "Não foi possível recuperar os dados.",
        });
      });
  }

  handleClick(event) {
    const column =
      event.target.tagName.toUpperCase() === "TH" ? event.target.cellIndex : -1;
    const data = Array.from(this.state.data);
    const descending = this.state.sortBy === column && !this.state.descending;
    data.sort((a, b) => {
      if (a[column] === b[column]) {
        return 0;
      }
      return descending
        ? a[column] < b[column]
          ? 1
          : -1
        : a[column] > b[column]
        ? 1
        : -1;
    });
    this.setState({
      data,
      sortBy: column,
      descending: descending,
      edit: {
        row: -1,
        column: -1,
      },
    });
  }

  handleNextColumn() {
    this.setState((prevState) => ({
      currentColumn: Math.min(
        prevState.currentColumn + 1,
        this.state.header.length - 1
      ),
    }));
  }

  handlePreviousColumn() {
    this.setState((prevState) => ({
      currentColumn: Math.max(prevState.currentColumn - 1, 0),
    }));
  }

  handleSearchInputChange(event) {
    const query = event.target.value.toLowerCase();
    const filteredData = this.state.data.filter((row) =>
      row.some((cell) => cell.toLowerCase().includes(query))
    );
    this.setState({ searchQuery: query, filteredData });
  }

  handleRoomSelectionChange(event) {
    const selectedRoom = event.target.value;
    this.setState({ selectedRoom });
    if (selectedRoom === "Todas as Salas") {
      this.setState({ filteredData: this.state.data });
    } else {
      const filteredData = this.state.data.filter(
        (row) => row[7] === selectedRoom
      );
      this.setState({ filteredData });
    }
  }

  render() {
    if (this.state.error) {
      return <div>{this.state.error}</div>;
    }

    const { title, header, currentColumn, filteredData, selectedRoom } =
      this.state;

    return (
      <div>
        <table className="pm-table">
          <caption className="pm-caption">{title}</caption>
          <TableHeader
            header={header}
            currentColumn={currentColumn}
            handleClick={this.handleClick}
          />
          <TableBody
            data={filteredData}
            currentColumn={currentColumn}
            onResetTable={this.onResetTable}
          />
          <tfoot>
            <tr>
              <td>
                <button
                  className="hide-on-desktop pm-button"
                  onClick={this.handlePreviousColumn}
                >
                  Anterior
                </button>
                <button
                  className="hide-on-desktop pm-button"
                  onClick={this.handleNextColumn}
                >
                  Próximo
                </button>
              </td>
            </tr>
          </tfoot>
        </table>

        <RoomDropdown
          selectedRoom={selectedRoom}
          handleRoomSelectionChange={this.handleRoomSelectionChange}
        />

        <input
          type="text"
          value={this.state.searchQuery}
          onChange={this.handleSearchInputChange}
          placeholder="Pesquise aqui:"
          className="pm-input"
        />
      </div>
    );
  }
}

PMTable.propTypes = {
  title: PropTypes.string.isRequired,
  header: PropTypes.array,
  data: PropTypes.array,
};

PMTable.defaultProps = {
  title: "Table",
  header: [],
  data: [],
};

export default PMTable;
