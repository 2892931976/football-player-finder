import React from 'react';
import TableHead from './components/TableHead';
import TableRow from './components/TableRow';

const Table = () => {
  const rows = [].map(row => <TableRow key={row.name} player={row} />);
  return (
    <table className="table is-striped">
      <TableHead />
      <tbody>
        {rows}
      </tbody>
    </table>
  );
};

export default Table;
