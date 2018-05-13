import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TableHead from './components/TableHead';
import TableRow from './components/TableRow';

class Table extends PureComponent {
  render() {
    const rows = this.props.players.map(row => <TableRow key={row.name} player={row} />);
    return (
      <table className="table is-striped">
        <TableHead />
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Table;
